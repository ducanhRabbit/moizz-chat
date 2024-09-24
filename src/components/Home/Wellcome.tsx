import React from 'react'

function Wellcome() {
  return (
    <div className="flex-1 h-full flex justify-center items-center bg-[url(./src/assets/img/animaildoodle500.png)]">
        <div className="bg-paper/80 backdrop-blur-[4px] p-3 rounded-xl text-center">
          <p className="text-xl font-semibold mb-1">Wellcome to Moizz Chat!</p>
          <p className="text-lg">Tweet something with your friend</p>
        </div>
      </div>
  )
}

export default Wellcome