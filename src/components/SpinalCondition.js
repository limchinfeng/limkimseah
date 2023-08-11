import React from 'react'

const Condition = ({description}) => {
  return(
    <li>
        <h2>{description}</h2>
    </li>
  )
}


const SpinalCondition = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-center py-24">
        <div className="pb-14">
          <h2 className="font-bold text-5xl text-center py-4 text-primary">
            脊椎疾病的范围
          </h2>
          <h2 className="font-bold text-4xl text-center pb-4  text-primary">
            Range of Spinal Conditions
          </h2>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SpinalCondition