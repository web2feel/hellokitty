import React from 'react'

function Form({handleChange, handleSubmit}) {
  return (
   <>
           <form onSubmit={handleSubmit} className="flex gap-4 w-full">
          <input
            className="py-3 px-3 border border-blue-200 flex-1 rounded-lg text-xl text-gray-500"
            onChange={handleChange}
            placeholder="Meow! what do you want to know?"
            type="text"
            name="qfield"
            id="qfield"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) =>
              (e.target.placeholder = "Meow! what do you want to know?")
            }
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 duration-300 text-white px-4 py-2 rounded text-xl "
          >
            Ask Me
          </button>
        </form>
   </>
  )
}

export default Form