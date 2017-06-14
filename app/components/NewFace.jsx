import React from 'react'

export default function NewFace(props) {
  const titleHandleChange = props.titleHandleChange
  const imageHandleChange = props.imageHandleChange
  const descriptionHandleChange = props.descriptionHandleChange
  const priceHandleChange = props.priceHandleChange
  const quantityHandleChange = props.quantityHandleChange
  const handleSubmit = props.handleSubmit
  const title = props.title
  const image = props.image
  const description = props.description
  const price = props.price
  const quantity = props.quantity
  const faces = props.faces
  const formTitle = props.formTitle

  return (
    <div>
      <form className='form-horizontal' onSubmit = {handleSubmit}>
        <fieldset>
          <legend>{formTitle}</legend>
          <div className='form-group'>
            <lable className='col-xs-2 control-lable'>Face Title</lable>
            <div className='col-xs-10'>
              <input
                className='form-control'
                type='text'
                onChange={titleHandleChange}
                value={title}
              />
            </div>
          </div> 
          <div className='form-group'>
            <lable className='col-xs-2 control-lable'>Face Image</lable>
            <div className='col-xs-10'>
              <input
                className='form-control'
                type='text'
                onChange={imageHandleChange}
                value={image}
              />
            </div>
          </div> 
          <div className='form-group'>
            <lable className='col-xs-2 control-lable'>Face Description</lable>
            <div className='col-xs-10'>
              <input
                className='form-control'
                type='text'
                onChange={descriptionHandleChange}
                value={description}
              />
            </div>
          </div> 
          <div className='form-group'>
            <lable className='col-xs-2 control-lable'>Face Price</lable>
            <div className='col-xs-10'>
              <input
                className='form-control'
                type='text'
                onChange={priceHandleChange}
                value={price}
              />
            </div>
          </div> 
          <div className='form-group'>
            <lable className='col-xs-2 control-lable'>Face Quantity</lable>
            <div className='col-xs-10'>
              <input
                className='form-control'
                type='text'
                onChange={quantityHandleChange}
                value={quantity}
              />
            </div>
          </div> 
          <div className='form-group'>
            <div className='col-xs-10 col-xs-offset-2'>
              <button
                type='submit'
                className='btn btn-success'>
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
}

