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