import React,{useState} from 'react';

export default (props)=>{

  const [checked,setChecked] = useState(false)

  const handleChange = (e)=>{
    const isChecked = e.target.value == 0 ? true : false
    setChecked(isChecked)
    props.onChange(isChecked);
  }

  return(
    <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="switch-1">
      <input onChange={handleChange} type="checkbox" id="switch-1" className="mdl-switch__input" value={checked ? 1 : 0} checked={checked}/>
      <span className="mdl-switch__label"></span>
    </label>
    )
}
