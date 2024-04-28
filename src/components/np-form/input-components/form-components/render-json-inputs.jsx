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
                    />
        } else if(object.type === 'radio') {
          return <RadioInputs 
                    key={index}
                    id={object.id} 
                    name={object["name"]} 
                    className={object["className"]} 
                    title={object["title"]}
                  />
        }
        else {
          return <TextInputs 
                    key={index} 
                    title={object["title"]} 
                    name={object["name"]} 
                  />
        }
      })
      }
    </>
  )
}

export default RenderJSONInputs
