import React from 'react'
import TextInputs from '../../../text-inputs'
import RadioInputs from '../../../radio-inputs'

const RenderJSONInputs = ({arrayOfJson}) => {
  return (
    <>
      {
      arrayOfJson.map((object, index) => {
        if(object.type !== undefined && object.type !== 'radio'){
            return <TextInputs  
                      key={index} 
                      title={object["title"]} 
                      name={object["name"]} 
                      type={object["type"]}
                      pattern={object.pattern && object.pattern}
                      {...(object.required ? { required: true } : {})}
                    />
        } else if(object.type === 'radio') {
          return <RadioInputs 
                    key={index}
                    id={object.id} 
                    name={object["name"]} 
                    className={object["className"]} 
                    title={object["title"]}
                    {...(object.required ? { required: true } : {})}
                  />
        }
        else {
          return <TextInputs 
                    key={index} 
                    title={object["title"]} 
                    name={object["name"]} 
                    {...(object.required ? { required: true } : {})}
                  />
        }
      })
      }
    </>
  )
}

export default RenderJSONInputs
