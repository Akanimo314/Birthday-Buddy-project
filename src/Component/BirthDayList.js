
const BirthDayList = ({id, img, fName, lName, age}) => {
  return (
    <li className='people'>
        <img src={img} alt={fName} className="img"/>
        <div>
        <h4>{`${fName} ${lName}`}</h4>
        <h5>{age} years</h5>
        </div>
    </li>
  )
}

export default BirthDayList