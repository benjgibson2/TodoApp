import { v4 as uuidv4 } from "uuid";

const TomorrowLogic = () =>{

    const tomorrowTasks = 
    ['Growth mindset - how to make effor the rewrad'
    , 'Stop procrastination by doing something that sucks - ice bath, metditing'
    , 'Keep track of all your behaviours like sleep, diet, nights out, what is causing low dopomine']
    
    // can't make the key the task itself, if the tasks have the same name
    // then they will also have the same key and rturn an error
    const tomorrowList = tomorrowTasks.map(task=> <li key= {task}>{task}</li>);

    return(
        //Div is a block element, which starts a line. Span will be inline
        // li is a list, ul is a bulleted list

      <div> 
        <br></br>
            <h2> 
                Things to do tomorrow 
            </h2>
            <input
                type = "checkbox"
            />
            <input
                type = "checkbox"
            />
            <ul>
                {tomorrowList} 
            </ul>
        </div> 
    );
}
export default TomorrowLogic;
