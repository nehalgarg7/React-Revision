import React from 'react'

function List(props) {

    let list = ["Samosa",'Sandwich','Burger'];
  
    return (
    <div>
        <h1>List</h1>
        <ul>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
        </ul>
        
        <ul>
            {
            list.map((item, idx)=>{
                return <li key={idx}>{item}</li>
            })
            }
        </ul>
        {/**Props */}
        <ul>
            {
              props.items.map((item,idx)=>{
                return <li key={idx}>Props : {item}</li>
              })
            }
        </ul>
    </div>
  )
}

export default List