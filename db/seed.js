'use strict'


const db = require('APP/db')
    , {User, Face, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  console.log('in seed file')
  const seeded = {
    users: users(),
    faces: faces()
  }

  // seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
    isAdmin: true,
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234',
    isAdmin: false,
  },
})

const faces = seed(Face, {
  grace: {
    title: 'Grace Hopper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Grace_Hopper.jpg/220px-Grace_Hopper.jpg',
    description: 'An American computer scientist and United States Navy rear admiral.',
    price: 19.06,
    quantity: 7
  },
  ada: {
    title: 'Ada Lovelace',
    image: 'https://cacm.acm.org/system/assets/0002/0859/082015_CACMpg21_Innovators-Assemble.large.jpg?1476779511&1440165064',
    description: 'An English mathematician and writer, chiefly known for her work on the Analytical Engine.',
    price: 18.15,
    quantity: 3
  },
  hedy: {
    title: 'Hedy Lamarr',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/a1/95/38/a19538757fc094a690a55bb25f9ca8c3.jpg',
    description: 'An Austrian and American film actress and inventor.',
    price: 19.14,
    quantity: 8
  },
  alan: {
    title: 'Alan Turing',
    image: 'https://sophosnews.files.wordpress.com/2012/06/alan-turing-portrait-250.png?w=250',
    description: 'An English computer scientist, mathematician, logician, cryptanalyst, philosopher and theoretical biologist.',
    price: 19.12,
    quantity: 2
  },
  mary: {
    title: 'Mary Jackson',
    image: 'https://cacm.acm.org/system/assets/0002/6304/12517.space.com.mary_jackson_nasa.large.jpg?1485365666&1485365666',
    description: 'A mathematician and aerospace engineer at the NASA.',
    price: 19.21,
    quantity: 6
  }
})

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users})
