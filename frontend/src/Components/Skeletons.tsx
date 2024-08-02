export default function SkeletonsListPatient() {
  return (
    <>
      <div className='border-1 rounded-md flex h-20 items-center justify-around transition-all duration-200 animate-pulse' >
        <div className="rounded-full bg-gray-300 h-10 w-10" />
        <div className="w-3/6 text-center">
          <div className='bg-gray-300 h-6 w-24 mx-auto rounded-md' />
          <div className='bg-gray-300 h-4 w-16 mx-auto mt-2 rounded-md' />
        </div>
        <div className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-gray-300' />
      </div >
      <div className='border-1 rounded-md flex h-20 items-center justify-around transition-all duration-200 animate-pulse' >
        <div className="rounded-full bg-gray-300 h-10 w-10" />
        <div className="w-3/6 text-center">
          <div className='bg-gray-300 h-6 w-24 mx-auto rounded-md' />
          <div className='bg-gray-300 h-4 w-16 mx-auto mt-2 rounded-md' />
        </div>
        <div className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-gray-300' />
      </div >
    </>
  )
}

export const SkeletonPatientInfo = () => (
  <div className="flex gap-4 items-center animate-pulse">
    <div className="rounded-full bg-gray-300 h-12 w-12" />
    <div className="text-left">
      <div className="bg-gray-300 h-5 w-32 mb-2 rounded-md" />
      <div className="bg-gray-300 h-4 w-24 mb-2 rounded-md" />
      <div className="bg-gray-300 h-4 w-40 rounded-md" />
    </div>
  </div>
);

export const SkeletonAcordion = () => {
  return (
    <>
      <div className=" justify-left p-6 flex items-center bg-gray-400 h-16  w-[325px] rounded-md m-auto animate-pulse">
      </div>
      <div className=" justify-left p-6 flex items-center bg-gray-400 h-16  w-[325px] rounded-md m-auto animate-pulse">
      </div>
      <div className=" justify-left p-6 flex items-center bg-gray-400 h-16  w-[325px] rounded-md m-auto animate-pulse">
      </div>
    </>
  )
}
export const SkeletonNotification = () => {
  return (
    <>
      <div className="flex p-3 cursor-pointer transition-all duration-300 flex-col mt-4 bg-gray-100 border-2 border-gray-600 w-full rounded-md animate-pulse">
        <div className="flex justify-between mb-1">
          <h3 className="font-inter text-sm font-semibold w-[60%] flex items-center gap-2">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
          </h3>
          <p className="text-sm flex items-center justify-center gap-2 w-16 h-4 bg-gray-300 rounded"></p>
        </div>
        <p className="text-gray-600 text-sm w-full h-4 bg-gray-300 rounded mb-2"></p>
        <p className="text-gray-600 text-sm w-full h-4 bg-gray-300 rounded mb-2"></p>
        <div className="flex justify-end">
          <span className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-300"></span>
        </div>
      </div>
      <div className="flex p-3 cursor-pointer transition-all duration-300 flex-col mt-4 bg-gray-100 border-2 border-gray-600 w-full rounded-md animate-pulse">
        <div className="flex justify-between mb-1">
          <h3 className="font-inter text-sm font-semibold w-[60%] flex items-center gap-2">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
          </h3>
          <p className="text-sm flex items-center justify-center gap-2 w-16 h-4 bg-gray-300 rounded"></p>
        </div>
        <p className="text-gray-600 text-sm w-full h-4 bg-gray-300 rounded mb-2"></p>
        <p className="text-gray-600 text-sm w-full h-4 bg-gray-300 rounded mb-2"></p>
        <div className="flex justify-end">
          <span className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-300"></span>
        </div>
      </div>
      <div className="flex p-3 cursor-pointer transition-all duration-300 flex-col mt-4 bg-gray-100 border-2 border-gray-600 w-full rounded-md animate-pulse">
        <div className="flex justify-between mb-1">
          <h3 className="font-inter text-sm font-semibold w-[60%] flex items-center gap-2">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
          </h3>
          <p className="text-sm flex items-center justify-center gap-2 w-16 h-4 bg-gray-300 rounded"></p>
        </div>
        <p className="text-gray-600 text-sm w-full h-4 bg-gray-300 rounded mb-2"></p>
        <p className="text-gray-600 text-sm w-full h-4 bg-gray-300 rounded mb-2"></p>
        <div className="flex justify-end">
          <span className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-300"></span>
        </div>
      </div>
    </>

  )
}

