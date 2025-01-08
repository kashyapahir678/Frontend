import React from 'react'

const FilterBar = ({ setSerachInput, serachInput}) => {

  return (
    <div className=''>
      <input
        className='py-2 px-4 text-white border-2 border-black rounded-md my-3 ml-2 dark:bg-gray-800 dark:border-gray-700' type="text"
        placeholder='serach product'
        value={serachInput}
        onChange={(e) => setSerachInput(e.target.value)}
      />


      {/* <select name="" id=""value={status} onChange={(e) => setStatus(e.target.value)} className='py-2 px-4 border-2 border-black rounded-md my-3 ml-2'>
        <option value="read">Read</option>
        <option value="unread">UnRead</option>
      </select> */}

    </div>
  )
}

export default FilterBar