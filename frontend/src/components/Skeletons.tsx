
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
      <div className=" justify-left p-6 flex items-center bg-gray-400 h-16  w-full rounded-md m-auto animate-pulse">
      </div>
      <div className=" justify-left p-6 flex items-center bg-gray-400 h-16  w-full rounded-md m-auto animate-pulse">
      </div>
      <div className=" justify-left p-6 flex items-center bg-gray-400 h-16  w-full rounded-md m-auto animate-pulse">
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

export const TreatmentSkeleton = () => {
  return (
    <>
      <div className="animate-pulse">
        <div className="border-2 p-2 rounded-md border-violet-color mb-4">
          <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div className="animate-pulse">
        <div className="border-2 p-2 rounded-md border-violet-color mb-4">
          <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div className="animate-pulse">
        <div className="border-2 p-2 rounded-md border-violet-color mb-4">
          <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export const TreatmentSkeletonSummary = () => {
  return (
    <>
      <div className="animate-pulse border-2 p-2 rounded-md border-violet-color mb-4">
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <ul className="ml-6 list-disc">
          <li className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></li>
          <li className="h-4 bg-gray-300 rounded-md mb-2 w-1/2"></li>
        </ul>
        <div className="mt-4">
          <div className="h-5 bg-gray-300 rounded-md mb-2 w-1/4"></div>
          <ul className="ml-6 list-disc">
            <li className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></li>
            <li className="h-4 bg-gray-300 rounded-md mb-2 w-1/2"></li>
            <li className="h-4 bg-gray-300 rounded-md w-1/4"></li>
          </ul>
        </div>
      </div>
      <div className="animate-pulse border-2 p-2 rounded-md border-violet-color mb-4">
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <ul className="ml-6 list-disc">
          <li className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></li>
          <li className="h-4 bg-gray-300 rounded-md mb-2 w-1/2"></li>
        </ul>
        <div className="mt-4">
          <div className="h-5 bg-gray-300 rounded-md mb-2 w-1/4"></div>
          <ul className="ml-6 list-disc">
            <li className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></li>
            <li className="h-4 bg-gray-300 rounded-md mb-2 w-1/2"></li>
            <li className="h-4 bg-gray-300 rounded-md w-1/4"></li>
          </ul>
        </div>
      </div>
    </>
  );
};


export const SkeletonInput = ({ label }: { label: string }) => (
  <div className='animate-pulse'>
    <label className='font-semibold block mb-2'>{label}</label>
    <div className='border-1 h-10 px-4 rounded-md border-gray-color bg-gray-300'>
    </div>
  </div>
);

export const SkeletonTreatments = () => (
  <>
    <div className="justify-center border-2 p-2 bg-light-color border-gray-color rounded-lg leading-6 flex flex-col gap-y-2 font-inter text-sm">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
        <div className="">
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
        </div>
        <div className="bg-gray-300 h-5 w-2/3 mb-2 mt-4 rounded"></div>
        <div className="">
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
        </div>
      </div>
    </div>
    <div className="justify-center border-2 p-2 bg-light-color border-gray-color rounded-lg leading-6 flex flex-col gap-y-2 font-inter text-sm">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
        <div className="">
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
        </div>
        <div className="bg-gray-300 h-5 w-2/3 mb-2 mt-4 rounded"></div>
        <div className="">
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
        </div>
      </div>
    </div>
    <div className="justify-center border-2 p-2 bg-light-color border-gray-color rounded-lg leading-6 flex flex-col gap-y-2 font-inter text-sm">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
        <div className="">
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
        </div>
        <div className="bg-gray-300 h-5 w-2/3 mb-2 mt-4 rounded"></div>
        <div className="">
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
          <div className="bg-gray-200 h-4 w-3/6 mb-2 rounded"></div>
        </div>
      </div>
    </div>
  </>
);




