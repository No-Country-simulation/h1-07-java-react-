
interface IconProps {
  width: number
  height: number
}

export function CloseIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const ClosePasswordIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_39_11059)">
        <path d="M8.825 8.825C8.65334 9.00922 8.44634 9.15697 8.21635 9.25945C7.98635 9.36193 7.73806 9.41704 7.48631 9.42148C7.23455 9.42592 6.98448 9.37961 6.75101 9.28531C6.51754 9.191 6.30545 9.05064 6.1274 8.8726C5.94936 8.69455 5.809 8.48246 5.71469 8.24899C5.62039 8.01552 5.57408 7.76545 5.57852 7.51369C5.58296 7.26194 5.63807 7.01365 5.74055 6.78365C5.84303 6.55366 5.99078 6.34666 6.175 6.175M0.625 0.625L14.375 14.375M11.2125 11.2125C10.1441 12.0269 8.84319 12.478 7.5 12.5C3.125 12.5 0.625 7.5 0.625 7.5C1.40243 6.05118 2.48071 4.78538 3.7875 3.7875L11.2125 11.2125ZM6.1875 2.65C6.61771 2.5493 7.05817 2.49896 7.5 2.5C11.875 2.5 14.375 7.5 14.375 7.5C13.9956 8.20975 13.5432 8.87796 13.025 9.49375L6.1875 2.65Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_39_11059">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const OpenPasswordIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const EyePasswordIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_39_11057)">
        <path d="M0.625 7.5C0.625 7.5 3.125 2.5 7.5 2.5C11.875 2.5 14.375 7.5 14.375 7.5C14.375 7.5 11.875 12.5 7.5 12.5C3.125 12.5 0.625 7.5 0.625 7.5Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 9.375C8.53553 9.375 9.375 8.53553 9.375 7.5C9.375 6.46447 8.53553 5.625 7.5 5.625C6.46447 5.625 5.625 6.46447 5.625 7.5C5.625 8.53553 6.46447 9.375 7.5 9.375Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_39_11057">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const LockIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_39_10605)">
        <path d="M4.375 6.875V4.375C4.375 3.5462 4.70424 2.75134 5.29029 2.16529C5.87634 1.57924 6.6712 1.25 7.5 1.25C8.3288 1.25 9.12366 1.57924 9.70971 2.16529C10.2958 2.75134 10.625 3.5462 10.625 4.375V6.875M3.125 6.875H11.875C12.5654 6.875 13.125 7.43464 13.125 8.125V12.5C13.125 13.1904 12.5654 13.75 11.875 13.75H3.125C2.43464 13.75 1.875 13.1904 1.875 12.5V8.125C1.875 7.43464 2.43464 6.875 3.125 6.875Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_39_10605">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const EmailIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.75 3.75C13.75 3.0625 13.1875 2.5 12.5 2.5H2.5C1.8125 2.5 1.25 3.0625 1.25 3.75M13.75 3.75V11.25C13.75 11.9375 13.1875 12.5 12.5 12.5H2.5C1.8125 12.5 1.25 11.9375 1.25 11.25V3.75M13.75 3.75L7.5 8.125L1.25 3.75" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const TabletIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 11.25H7.50625M3.75 1.25H11.25C11.9404 1.25 12.5 1.80964 12.5 2.5V12.5C12.5 13.1904 11.9404 13.75 11.25 13.75H3.75C3.05964 13.75 2.5 13.1904 2.5 12.5V2.5C2.5 1.80964 3.05964 1.25 3.75 1.25Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const UserIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 13.125V11.875C12.5 11.212 12.2366 10.5761 11.7678 10.1072C11.2989 9.63839 10.663 9.375 10 9.375H5C4.33696 9.375 3.70107 9.63839 3.23223 10.1072C2.76339 10.5761 2.5 11.212 2.5 11.875V13.125M10 4.375C10 5.75571 8.88071 6.875 7.5 6.875C6.11929 6.875 5 5.75571 5 4.375C5 2.99429 6.11929 1.875 7.5 1.875C8.88071 1.875 10 2.99429 10 4.375Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const HamburguerIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H20" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6H20" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18H20" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const CloudIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 20L15 15L10 20" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 15V26.25" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.4873 22.9874C26.7065 22.3227 27.6696 21.271 28.2247 19.9981C28.7797 18.7253 28.8951 17.3039 28.5526 15.9582C28.2101 14.6125 27.4292 13.4192 26.3332 12.5667C25.2371 11.7141 23.8884 11.2508 22.4998 11.2499H20.9248C20.5465 9.78641 19.8413 8.42778 18.8623 7.2761C17.8832 6.12442 16.6559 5.20967 15.2725 4.60062C13.889 3.99156 12.3855 3.70406 10.875 3.75971C9.36443 3.81537 7.88616 4.21273 6.5513 4.92194C5.21644 5.63115 4.05972 6.63374 3.16811 7.85434C2.27649 9.07493 1.67319 10.4818 1.40355 11.9691C1.13392 13.4564 1.20496 14.9855 1.61134 16.4414C2.01773 17.8973 2.74888 19.2422 3.74983 20.3749" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 20L15 15L10 20" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const StorageIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V10C2.5 11.3807 3.61929 12.5 5 12.5H25C26.3807 12.5 27.5 11.3807 27.5 10V5C27.5 3.61929 26.3807 2.5 25 2.5Z" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 17.5H5C3.61929 17.5 2.5 18.6193 2.5 20V25C2.5 26.3807 3.61929 27.5 5 27.5H25C26.3807 27.5 27.5 26.3807 27.5 25V20C27.5 18.6193 26.3807 17.5 25 17.5Z" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 7.5H7.5125" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 22.5H7.5125" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export const SecurityIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 27.5C15 27.5 25 22.5 25 15V6.25L15 2.5L5 6.25V15C5 22.5 15 27.5 15 27.5Z" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


  )
}
export const FeaturesIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 26.25V17.5" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12.5V3.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 26.25V15" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 10V3.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 26.25V20" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 15V3.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.25 17.5H8.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.25 10H18.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.25 20H28.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export const UpdateIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V15" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 7.5L15 2.5L10 7.5" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 2.5V18.75" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export const VideoIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.1747 8.025C28.0263 7.43176 27.7238 6.88821 27.2981 6.44926C26.8723 6.0103 26.3382 5.69148 25.7497 5.525C23.5997 5 14.9997 5 14.9997 5C14.9997 5 6.39974 5 4.24974 5.575C3.6613 5.74148 3.12721 6.0603 2.70142 6.49926C2.27563 6.93821 1.97322 7.48176 1.82474 8.075C1.43126 10.2569 1.23878 12.4704 1.24974 14.6875C1.23571 16.9213 1.4282 19.1516 1.82474 21.35C1.98844 21.9248 2.29762 22.4477 2.72242 22.8681C3.14721 23.2885 3.67326 23.5923 4.24974 23.75C6.39974 24.325 14.9997 24.325 14.9997 24.325C14.9997 24.325 23.5997 24.325 25.7497 23.75C26.3382 23.5835 26.8723 23.2647 27.2981 22.8257C27.7238 22.3868 28.0263 21.8432 28.1747 21.25C28.5652 19.0845 28.7576 16.8879 28.7497 14.6875C28.7638 12.4537 28.5713 10.2234 28.1747 8.025V8.025Z" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1875 18.7751L19.375 14.6876L12.1875 10.6001V18.7751Z" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export const ChevronIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 13L7 7L1 1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const TimeIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 23.75C19.8325 23.75 23.75 19.8325 23.75 15C23.75 10.1675 19.8325 6.25 15 6.25C10.1675 6.25 6.25 10.1675 6.25 15C6.25 19.8325 10.1675 23.75 15 23.75Z" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 11.25V15L16.875 16.875" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.6371 21.6875L20.1996 26.475C20.1433 27.0983 19.8552 27.6778 19.3924 28.0991C18.9295 28.5203 18.3254 28.7526 17.6996 28.75H12.2871C11.6613 28.7526 11.0572 28.5203 10.5944 28.0991C10.1315 27.6778 9.84343 27.0983 9.78711 26.475L9.34961 21.6875M9.36211 8.31252L9.79961 3.52502C9.85574 2.90387 10.142 2.32613 10.6023 1.90521C11.0625 1.4843 11.6634 1.25061 12.2871 1.25002H17.7246C18.3504 1.24748 18.9545 1.47977 19.4174 1.90099C19.8802 2.32221 20.1683 2.90172 20.2246 3.52502L20.6621 8.31252" stroke="#2851E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const StarIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z" fill="#3261E9" />
    </svg>
  )
}

export const AvatarIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const LinkedinIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.333 6.66699C14.6591 6.66699 15.9309 7.19378 16.8685 8.13146C17.8062 9.06914 18.333 10.3409 18.333 11.667V17.5003H14.9997V11.667C14.9997 11.225 14.8241 10.801 14.5115 10.4885C14.199 10.1759 13.775 10.0003 13.333 10.0003C12.891 10.0003 12.4671 10.1759 12.1545 10.4885C11.8419 10.801 11.6663 11.225 11.6663 11.667V17.5003H8.33301V11.667C8.33301 10.3409 8.85979 9.06914 9.79747 8.13146C10.7352 7.19378 12.0069 6.66699 13.333 6.66699Z" fill="#ffffff" />
      <path d="M5.00033 7.5H1.66699V17.5H5.00033V7.5Z" fill="#ffffff" />
      <path d="M3.33366 5.00033C4.25413 5.00033 5.00033 4.25413 5.00033 3.33366C5.00033 2.41318 4.25413 1.66699 3.33366 1.66699C2.41318 1.66699 1.66699 2.41318 1.66699 3.33366C1.66699 4.25413 2.41318 5.00033 3.33366 5.00033Z" fill="#ffffff" />
    </svg>
  )
}

export const ArtistIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2.5V12.5" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const FacebookIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9997 1.66699H12.4997C11.3946 1.66699 10.3348 2.10598 9.5534 2.88738C8.77199 3.66878 8.33301 4.72859 8.33301 5.83366V8.33366H5.83301V11.667H8.33301V18.3337H11.6663V11.667H14.1663L14.9997 8.33366H11.6663V5.83366C11.6663 5.61265 11.7541 5.40068 11.9104 5.2444C12.0667 5.08812 12.2787 5.00033 12.4997 5.00033H14.9997V1.66699Z" fill="#ffffff" />
    </svg>
  )
}

export const ArrowIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const CheckIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38.3334 18.3133V20C38.3311 23.9534 37.0509 27.8002 34.6838 30.9666C32.3167 34.1331 28.9894 36.4495 25.1982 37.5704C21.407 38.6914 17.355 38.5568 13.6465 37.1867C9.9381 35.8166 6.77189 33.2845 4.62011 29.9679C2.46834 26.6514 1.4463 22.7281 1.70643 18.7832C1.96655 14.8383 3.4949 11.0832 6.06353 8.07792C8.63217 5.07262 12.1035 2.97816 15.9597 2.10689C19.8159 1.23562 23.8505 1.63424 27.4617 3.24329M38.3334 5.33329L20 23.685L14.5 18.185" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export const LoaderIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V6M12 18V22M4.92969 4.93005L7.75969 7.76005M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.92969 19.07L7.75969 16.24M16.24 7.76L19.07 4.93" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const PhoneIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.0004 16.92V19.92C22.0016 20.1985 21.9445 20.4741 21.8329 20.7293C21.7214 20.9845 21.5577 21.2136 21.3525 21.4018C21.1473 21.5901 20.905 21.7335 20.6412 21.8227C20.3773 21.9119 20.0978 21.945 19.8204 21.92C16.7433 21.5856 13.7874 20.5341 11.1904 18.85C8.77425 17.3146 6.72576 15.2661 5.19042 12.85C3.5004 10.2412 2.44866 7.27097 2.12042 4.17997C2.09543 3.90344 2.1283 3.62474 2.21692 3.3616C2.30555 3.09846 2.44799 2.85666 2.63519 2.6516C2.82238 2.44653 3.05023 2.28268 3.30421 2.1705C3.5582 2.05831 3.83276 2.00024 4.11042 1.99997H7.11042C7.59573 1.9952 8.06621 2.16705 8.43418 2.48351C8.80215 2.79996 9.0425 3.23942 9.11042 3.71997C9.23704 4.68004 9.47187 5.6227 9.81042 6.52997C9.94497 6.8879 9.97408 7.27689 9.89433 7.65086C9.81457 8.02482 9.62928 8.36809 9.36042 8.63998L8.09042 9.90997C9.51398 12.4135 11.5869 14.4864 14.0904 15.91L15.3604 14.64C15.6323 14.3711 15.9756 14.1858 16.3495 14.1061C16.7235 14.0263 17.1125 14.0554 17.4704 14.19C18.3777 14.5285 19.3204 14.7634 20.2804 14.89C20.7662 14.9585 21.2098 15.2032 21.527 15.5775C21.8441 15.9518 22.0126 16.4296 22.0004 16.92Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const HomeIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export const MapIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const CardIcon = ({ width, height }: { width: number, height: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}




interface IconProps {
  width: number
  height: number
  stroke: string
}


export const IconCorreo = ({ width, height }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.75 3.75C13.75 3.0625 13.1875 2.5 12.5 2.5H2.5C1.8125 2.5 1.25 3.0625 1.25 3.75M13.75 3.75V11.25C13.75 11.9375 13.1875 12.5 12.5 12.5H2.5C1.8125 12.5 1.25 11.9375 1.25 11.25V3.75M13.75 3.75L7.5 8.125L1.25 3.75" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}


export const IconPassword = ({ width, height }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_39_11424)">
        <path d="M4.375 6.875V4.375C4.375 3.5462 4.70424 2.75134 5.29029 2.16529C5.87634 1.57924 6.6712 1.25 7.5 1.25C8.3288 1.25 9.12366 1.57924 9.70971 2.16529C10.2958 2.75134 10.625 3.5462 10.625 4.375V6.875M3.125 6.875H11.875C12.5654 6.875 13.125 7.43464 13.125 8.125V12.5C13.125 13.1904 12.5654 13.75 11.875 13.75H3.125C2.43464 13.75 1.875 13.1904 1.875 12.5V8.125C1.875 7.43464 2.43464 6.875 3.125 6.875Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_39_11424">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}


export function ClosePassword({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_39_11059)">
        <path d="M8.825 8.825C8.65334 9.00922 8.44634 9.15697 8.21635 9.25945C7.98635 9.36193 7.73806 9.41704 7.48631 9.42148C7.23455 9.42592 6.98448 9.37961 6.75101 9.28531C6.51754 9.191 6.30545 9.05064 6.1274 8.8726C5.94936 8.69455 5.809 8.48246 5.71469 8.24899C5.62039 8.01552 5.57408 7.76545 5.57852 7.51369C5.58296 7.26194 5.63807 7.01365 5.74055 6.78365C5.84303 6.55366 5.99078 6.34666 6.175 6.175M0.625 0.625L14.375 14.375M11.2125 11.2125C10.1441 12.0269 8.84319 12.478 7.5 12.5C3.125 12.5 0.625 7.5 0.625 7.5C1.40243 6.05118 2.48071 4.78538 3.7875 3.7875L11.2125 11.2125ZM6.1875 2.65C6.61771 2.5493 7.05817 2.49896 7.5 2.5C11.875 2.5 14.375 7.5 14.375 7.5C13.9956 8.20975 13.5432 8.87796 13.025 9.49375L6.1875 2.65Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_39_11059">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export function OpenPassword({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function GenderIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.625 13.125V11.875C10.625 11.212 10.3616 10.5761 9.89277 10.1072C9.42393 9.63839 8.78804 9.375 8.125 9.375H3.125C2.46196 9.375 1.82607 9.63839 1.35723 10.1072C0.888392 10.5761 0.625 11.212 0.625 11.875V13.125M14.375 13.125V11.875C14.3746 11.3211 14.1902 10.783 13.8509 10.3452C13.5115 9.90741 13.0363 9.59473 12.5 9.45625M10 1.95625C10.5378 2.09394 11.0144 2.40669 11.3548 2.84519C11.6952 3.2837 11.8799 3.82302 11.8799 4.37813C11.8799 4.93323 11.6952 5.47255 11.3548 5.91106C11.0144 6.34956 10.5378 6.66231 10 6.8M8.125 4.375C8.125 5.75571 7.00571 6.875 5.625 6.875C4.24429 6.875 3.125 5.75571 3.125 4.375C3.125 2.99429 4.24429 1.875 5.625 1.875C7.00571 1.875 8.125 2.99429 8.125 4.375Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}



export function UserIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_259_774)">
        <circle cx="22" cy="22" r="20" fill="white" stroke="#666666" strokeWidth="4" strokeLinecap="round" />
        <path d="M31.625 33.6875V33.6875C31.625 30.6499 29.1626 28.1875 26.125 28.1875H17.875C14.8374 28.1875 12.375 30.6499 12.375 33.6875V33.6875" stroke="#666666" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 24.0625C25.797 24.0625 28.875 20.9845 28.875 17.1875C28.875 13.3905 25.797 10.3125 22 10.3125C18.203 10.3125 15.125 13.3905 15.125 17.1875C15.125 20.9845 18.203 24.0625 22 24.0625Z" stroke="#666666" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_259_774">
          <rect width="44" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export function CampanaIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function MenuHambuerguesa({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-20">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}


export function CalendarIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_261_794)">
        <path d="M10 1.25V3.75M5 1.25V3.75M1.875 6.25H13.125M3.125 2.5H11.875C12.5654 2.5 13.125 3.05964 13.125 3.75V12.5C13.125 13.1904 12.5654 13.75 11.875 13.75H3.125C2.43464 13.75 1.875 13.1904 1.875 12.5V3.75C1.875 3.05964 2.43464 2.5 3.125 2.5Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_261_794">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function RelojIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_262_796)">
        <path d="M7.5 3.75V7.5L10 8.75M13.75 7.5C13.75 10.9518 10.9518 13.75 7.5 13.75C4.04822 13.75 1.25 10.9518 1.25 7.5C1.25 4.04822 4.04822 1.25 7.5 1.25C10.9518 1.25 13.75 4.04822 13.75 7.5Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_262_796">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

interface IconPropsTwo {
  width: number
  height: number
  stroke: string
  classname: string
}

export function LapizIcon({ width, height, classname }: IconPropsTwo) {
  return (
    <svg width={width} height={height} className={classname} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 12.5001H13.125M10.3125 2.18764C10.5611 1.939 10.8984 1.79932 11.25 1.79932C11.4241 1.79932 11.5965 1.83361 11.7574 1.90024C11.9182 1.96687 12.0644 2.06453 12.1875 2.18764C12.3106 2.31076 12.4083 2.45691 12.4749 2.61777C12.5415 2.77863 12.5758 2.95103 12.5758 3.12514C12.5758 3.29925 12.5415 3.47166 12.4749 3.63251C12.4083 3.79337 12.3106 3.93953 12.1875 4.06264L4.375 11.8751L1.875 12.5001L2.5 10.0001L10.3125 2.18764Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function FlechaIcon({ width, height, stroke }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.625 11.25L9.375 7.5L5.625 3.75" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function ArrowBlackIcon({ width, height, stroke }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.625 11.25L9.375 7.5L5.625 3.75" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}


export function FlechaIconTwo({ width, height, stroke, classname }: IconPropsTwo) {
  return (
    <svg width={width} height={height} className={classname} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7L7 11M7 11L11 15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function ArrowWhiteIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} className="ml-1" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7L7 11M7 11L11 15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function HomeIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} className="text-red-600" height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function PeopleIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M23 19V17C22.9993 16.1137 22.7044 15.2528 22.1614 14.5523C21.6184 13.8519 20.8581 13.3516 20 13.13M16 1.13C16.8604 1.3503 17.623 1.8507 18.1676 2.55231C18.7122 3.25392 19.0078 4.11683 19.0078 5.005C19.0078 5.89317 18.7122 6.75608 18.1676 7.45769C17.623 8.1593 16.8604 8.6597 16 8.88M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function MenssageIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function CampanaIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7295 21C13.5537 21.3031 13.3014 21.5547 12.9978 21.7295C12.6941 21.9044 12.3499 21.9965 11.9995 21.9965C11.6492 21.9965 11.3049 21.9044 11.0013 21.7295C10.6977 21.5547 10.4453 21.3031 10.2695 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function UserIconTwo2({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function BloodIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9999 2.68994L17.6599 8.34994C18.7792 9.46855 19.5417 10.894 19.8508 12.446C20.1599 13.998 20.0018 15.6068 19.3964 17.0689C18.7911 18.531 17.7657 19.7808 16.45 20.66C15.1343 21.5393 13.5874 22.0086 12.0049 22.0086C10.4224 22.0086 8.87549 21.5393 7.55978 20.66C6.24407 19.7808 5.2187 18.531 4.61335 17.0689C4.008 15.6068 3.84988 13.998 4.15899 12.446C4.46809 10.894 5.23054 9.46855 6.34989 8.34994L11.9999 2.68994Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DateIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}



export function JobIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21M4 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7Z" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}


export function MicrophoneOpen({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19M12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10M12 19V23M8 23H16M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="#EFF3FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export function MicrophoneClose({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0.99997L23 23M15 9.33997V3.99997C15.0007 3.256 14.725 2.53829 14.2264 1.98617C13.7277 1.43405 13.0417 1.08691 12.3015 1.01214C11.5613 0.937375 10.8197 1.14031 10.2207 1.58156C9.62172 2.0228 9.20805 2.67088 9.06 3.39997M17 16.95C16.0238 17.9464 14.7721 18.6284 13.4056 18.9086C12.0391 19.1887 10.62 19.0542 9.3305 18.5223C8.04096 17.9903 6.93976 17.0852 6.16817 15.9231C5.39658 14.761 4.98979 13.3949 5 12V9.99997M19 9.99997V12C18.9996 12.4124 18.9628 12.824 18.89 13.23M12 19V23M8 23H16M9 8.99997V12C9.00052 12.5929 9.17675 13.1724 9.50643 13.6653C9.83611 14.1582 10.3045 14.5423 10.8523 14.7691C11.4002 14.996 12.0029 15.0554 12.5845 14.9398C13.1661 14.8243 13.7005 14.539 14.12 14.12L9 8.99997Z" stroke="#EFF3FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SearchIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_518_588)">
        <path d="M13.1252 13.125L10.4065 10.4063M11.875 6.875C11.875 9.63642 9.63642 11.875 6.875 11.875C4.11358 11.875 1.875 9.63642 1.875 6.875C1.875 4.11358 4.11358 1.875 6.875 1.875C9.63642 1.875 11.875 4.11358 11.875 6.875Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_518_588">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}
export function HealthIcon({ width, height }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="#948ABC" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
    </path >
    </svg>
  )
}

export function MensaggeIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}


export function GitBrantIcon({ height }: IconProps) {
  return (<svg width={height} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2.5V12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  )
}

export function HistoryIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2L20 8M14 2V8H20M9 15H15" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function DonationIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9996 3.36255L22.0746 10.4375C23.4738 11.8358 24.4269 13.6176 24.8132 15.5576C25.1996 17.4976 25.002 19.5086 24.2453 21.3363C23.4886 23.1639 22.2069 24.7261 20.5622 25.8252C18.9176 26.9243 16.984 27.5109 15.0059 27.5109C13.0278 27.5109 11.0941 26.9243 9.44948 25.8252C7.80485 24.7261 6.52313 23.1639 5.76644 21.3363C5.00976 19.5086 4.81211 17.4976 5.19849 15.5576C5.58487 13.6176 6.53793 11.8358 7.93711 10.4375L14.9996 3.36255Z" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function TratamentIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 15H22.5L18.75 26.25L11.25 3.75L7.5 15H2.5" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function CorIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.0497 5.76246C25.4112 5.12372 24.6532 4.61702 23.8189 4.27132C22.9845 3.92561 22.0903 3.74768 21.1872 3.74768C20.2841 3.74768 19.3898 3.92561 18.5555 4.27132C17.7211 4.61702 16.9631 5.12372 16.3247 5.76246L14.9997 7.08746L13.6747 5.76246C12.385 4.47285 10.636 3.74835 8.81216 3.74835C6.98837 3.74835 5.23928 4.47285 3.94966 5.76246C2.66005 7.05208 1.93555 8.80117 1.93555 10.625C1.93555 12.4488 2.66005 14.1978 3.94966 15.4875L5.27466 16.8125L14.9997 26.5375L24.7247 16.8125L26.0497 15.4875C26.6884 14.849 27.1951 14.091 27.5408 13.2567C27.8865 12.4223 28.0644 11.5281 28.0644 10.625C28.0644 9.72185 27.8865 8.82759 27.5408 7.99327C27.1951 7.15894 26.6884 6.40091 26.0497 5.76246V5.76246Z" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function WacthIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7.5V15L20 17.5M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function RecordIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 10V15M15 20H15.0125M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export function CheckIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 13.75L15 17.5L27.5 5M26.25 15V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H20" stroke="#5956E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

// Iconons del Paciente del Home

export function CaledarIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M35 40C37.7614 40 40 37.7614 40 35C40 32.2386 37.7614 30 35 30C32.2386 30 30 32.2386 30 35C30 37.7614 32.2386 40 35 40ZM35 42C38.866 42 42 38.866 42 35C42 31.134 38.866 28 35 28C31.134 28 28 31.134 28 35C28 38.866 31.134 42 35 42Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35 31.5C35.5523 31.5 36 31.9477 36 32.5V34.5858L36.7071 35.2929C37.0976 35.6834 37.0976 36.3166 36.7071 36.7071C36.3166 37.0976 35.6834 37.0976 35.2929 36.7071L34 35.4142V32.5C34 31.9477 34.4477 31.5 35 31.5Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 23H12V25H14V23ZM12 21C10.8954 21 10 21.8954 10 23V25C10 26.1046 10.8954 27 12 27H14C15.1046 27 16 26.1046 16 25V23C16 21.8954 15.1046 21 14 21H12Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 23H20V25H22V23ZM20 21C18.8954 21 18 21.8954 18 23V25C18 26.1046 18.8954 27 20 27H22C23.1046 27 24 26.1046 24 25V23C24 21.8954 23.1046 21 22 21H20Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 23H28V25H30V23ZM28 21C26.8954 21 26 21.8954 26 23V25C26 26.1046 26.8954 27 28 27H30C31.1046 27 32 26.1046 32 25V23C32 21.8954 31.1046 21 30 21H28Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 31H12V33H14V31ZM12 29C10.8954 29 10 29.8954 10 31V33C10 34.1046 10.8954 35 12 35H14C15.1046 35 16 34.1046 16 33V31C16 29.8954 15.1046 29 14 29H12Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 31H20V33H22V31ZM20 29C18.8954 29 18 29.8954 18 31V33C18 34.1046 18.8954 35 20 35H22C23.1046 35 24 34.1046 24 33V31C24 29.8954 23.1046 29 22 29H20Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 12C8 11.4477 8.44772 11 9 11H14V9H9C7.34315 9 6 10.3431 6 12V36C6 37.6569 7.34315 39 9 39H29.2547C28.8334 38.396 28.5049 37.7224 28.2899 37H9C8.44772 37 8 36.5523 8 36V12ZM34 28.0709C34.3266 28.0242 34.6605 28 35 28C35.3395 28 35.6734 28.0242 36 28.0709V12C36 10.3432 34.6569 9 33 9H30V11H33C33.5523 11 34 11.4477 34 12V28.0709ZM16 11H26.5625V9H16V11Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28 9H16V12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12V9H9C7.89543 9 7 9.89543 7 11V16C7 17.1046 7.89543 18 9 18H33C34.1046 18 35 17.1039 35 15.9993V11.0006C35 9.89608 34.1046 9 33 9H30V12C30 12.5523 29.5523 13 29 13C28.4477 13 28 12.5523 28 12V9Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M36 18H8V16H36V18Z" fill="#948ABC" />
      <path d="M12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7V11C14 11.5523 13.5523 12 13 12C12.4477 12 12 11.5523 12 11V7Z" fill="#948ABC" />
      <path d="M26 7C26 6.44772 26.4477 6 27 6C27.5523 6 28 6.44772 28 7V11C28 11.5523 27.5523 12 27 12C26.4477 12 26 11.5523 26 11V7Z" fill="#948ABC" />
    </svg>

  )
}

export function TratamentIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_985_1094)">
        <path d="M5.99989 16.6666L16.6666 5.99989C17.9042 4.76221 19.5829 4.06689 21.3332 4.06689C23.0836 4.06689 24.7622 4.76221 25.9999 5.99989C27.2376 7.23757 27.9329 8.91622 27.9329 10.6666C27.9329 12.4169 27.2376 14.0955 25.9999 15.3332L15.3332 25.9999C14.0955 27.2376 12.4169 27.9329 10.6666 27.9329C8.91622 27.9329 7.23757 27.2376 5.99989 25.9999C4.76221 24.7622 4.06689 23.0836 4.06689 21.3332C4.06689 19.5829 4.76221 17.9042 5.99989 16.6666" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.3333 11.3333L20.6666 20.6666" stroke="#948ABC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_985_1094">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function EjercicioIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28.5 17.5C28.5 19.9852 26.4852 22 24 22C21.5147 22 19.5 19.9852 19.5 17.5C19.5 15.0147 21.5147 13 24 13C26.4852 13 28.5 15.0147 28.5 17.5ZM26.5 17.5C26.5 18.8807 25.3807 20 24 20C22.6192 20 21.5 18.8807 21.5 17.5C21.5 16.1192 22.6192 15 24 15C25.3807 15 26.5 16.1192 26.5 17.5Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9.00354 6.06078C9.55384 6.01402 10.0378 6.42223 10.0846 6.97254L10.3708 10.3417C20.3975 8.56603 27.3733 8.55034 37.6285 10.3489L37.9153 6.97254C37.9621 6.42223 38.4461 6.01402 38.9964 6.06078L40.9892 6.23008C41.5395 6.27683 41.9477 6.76084 41.9009 7.31114L41.5723 11.1797C41.8879 11.4002 42.0607 11.7936 41.9807 12.1954C41.9163 12.5187 41.7027 12.7744 41.4257 12.9049L41.0755 17.0273C41.0287 17.5776 40.5447 17.9858 39.9944 17.939L38.0016 17.7697C37.4513 17.723 37.0431 17.239 37.0899 16.6887L37.4585 12.3496C36.9109 12.2527 36.3732 12.1611 35.8442 12.0748C35.9385 12.3662 35.9895 12.6772 35.9895 13C35.9895 13.0756 35.9908 13.1907 35.9927 13.3492L35.9928 13.3581C36.0061 14.5095 36.0412 17.546 35.6844 20.4418C35.4847 22.0621 35.135 23.901 34.4533 25.4156C33.945 26.5451 32.8995 28.2179 31 28.7957V29.8835C31.7455 29.6203 32.4919 29.3692 33.1099 29.2133C33.5013 29.1145 34.2146 28.9499 34.9559 29.0155C35.3339 29.0489 36.0987 29.1709 36.8135 29.7524C37.671 30.4499 38 31.4244 38 32.2632C38 33.1862 37.7029 35.3792 37.4661 36.9401C37.3389 37.7782 37.2068 38.5775 37.1015 39.1211L37.0931 39.1647C37.0197 39.5452 36.9104 40.1117 36.6036 40.628L36.6029 40.6293L36.6012 40.6321C36.5319 40.7494 36.2163 41.2819 35.5646 41.6742C35.1623 41.9164 34.5002 42.1805 33.6714 42.0853C32.8326 41.9888 32.2336 41.5717 31.8797 41.2144C31.5134 40.8445 31.2455 40.3797 31.1102 39.8753C30.9307 39.2119 30.877 38.5197 30.8491 37.9006C30.8395 37.6892 30.8329 37.4907 30.8266 37.3011C30.8151 36.956 30.8046 36.6403 30.7791 36.3297C29.9652 36.6121 29.0896 36.901 28.2179 37.1459C26.9174 37.5115 25.4149 37.8421 24 37.8421C22.5851 37.8421 21.0826 37.5115 19.7821 37.146C18.9247 36.905 18.0636 36.6216 17.2612 36.3436L17.2412 36.6051C17.1786 37.418 17.1147 38.2176 17.0658 38.756C17.0626 38.7914 17.0594 38.8297 17.056 38.8706C17.0253 39.2379 16.9775 39.8113 16.7414 40.3329C16.6924 40.4433 16.442 41.0043 15.8489 41.4656C15.474 41.7572 14.7749 42.1482 13.8302 42.0926C12.8811 42.0368 12.228 41.5625 11.8843 41.2188C11.1595 40.494 11.0616 39.5908 10.9998 39.0214C10.993 38.9589 10.9867 38.9004 10.98 38.8466C10.9592 38.6793 10.9266 38.4595 10.8825 38.1874C10.8051 37.7103 10.7042 37.1472 10.5947 36.5354L10.5468 36.2682C10.4224 35.5726 10.2909 34.8289 10.1906 34.1721C10.0995 33.575 10 32.8437 10 32.2632C10 31.4243 10.329 30.4499 11.1865 29.7524C11.9013 29.1709 12.6661 29.0489 13.0442 29.0155C13.1076 29.0098 13.1708 29.0059 13.2337 29.0035C13.7623 28.9831 14.2635 29.0689 14.6274 29.1504C14.7257 29.1724 14.814 29.1941 14.8901 29.2133C15.5081 29.3692 16.2545 29.6203 17 29.8835V28.78C16.873 28.738 16.7501 28.6907 16.6314 28.6387C15.4244 28.1103 14.6396 27.0982 14.155 26.2463C13.9854 25.9483 13.8526 25.6699 13.7513 25.4386C13.7108 25.3463 13.6715 25.2527 13.6331 25.1579C13.0729 23.7722 12.7356 22.1323 12.5166 20.6461C12.0398 17.4105 12 13.9846 12 13C12 12.6741 12.052 12.3603 12.1481 12.0666C11.6211 12.1533 11.0857 12.2454 10.5408 12.3427L10.91 16.6887C10.9568 17.239 10.5486 17.723 9.99828 17.7697L8.00546 17.939C7.45516 17.9858 6.97115 17.5776 6.9244 17.0273L6.57418 12.9049C6.29791 12.7747 6.08461 12.52 6.01965 12.1976C5.93858 11.7952 6.11132 11.4006 6.42762 11.1797L6.09896 7.31114C6.05221 6.76084 6.46042 6.27683 7.01072 6.23008L9.00354 6.06078ZM17.5007 11.3422C17.8162 11.8172 18 12.3871 18 13C18 13.9054 18.041 16.9793 18.4525 19.7713C18.6597 21.1774 18.9319 22.2974 19.2336 23H28.9605L28.9708 22.9775L28.982 22.9531C29.2893 22.2701 29.5521 21.1469 29.7294 19.708C30.0314 17.2574 30.0055 14.6551 29.993 13.4478L29.9929 13.4424C29.9911 13.2667 29.9895 13.1146 29.9895 13C29.9895 12.3913 30.1708 11.825 30.4823 11.352C25.9816 10.8913 21.9349 10.8905 17.5007 11.3422ZM29 28.7819V27.98C29 27.4667 29.3887 27.0367 29.8994 26.9851C31.2618 26.8473 32.1211 25.7243 32.6295 24.5947C33.1866 23.357 33.5073 21.7563 33.6994 20.1972C34.0388 17.4426 34.0061 14.5205 33.9928 13.3723L33.9927 13.3667C33.991 13.2164 33.9895 13.089 33.9895 13C33.9895 12.4477 33.5418 12 32.9895 12C32.4372 12 31.9895 12.4477 31.9895 13C31.9895 13.103 31.991 13.2445 31.9929 13.4271L31.993 13.4383C32.0055 14.6447 32.0337 17.3616 31.7144 19.9526C31.5298 21.451 31.2381 22.8133 30.8057 23.7739C30.6002 24.2307 30.3992 24.5348 30.1935 24.7283C30.008 24.9028 29.7629 25 29.5082 25H18.6379C18.321 25 18.0229 24.8498 17.8343 24.5951C17.7098 24.427 17.5691 24.1849 17.4149 23.8331C16.9996 22.8853 16.6919 21.5425 16.4738 20.0629C16.0406 17.123 16 13.9316 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.7947 14.0276 16.2071 14.2968 18.769C14.3521 19.2954 14.4177 19.8282 14.4952 20.3545C14.7212 21.888 15.0595 23.4411 15.5831 24.6359C16.0392 25.6767 16.8252 26.8435 18.1094 26.9848C18.6163 27.0406 19 27.4689 19 27.9788V28.782C19.2434 28.8554 19.5518 28.9408 19.9165 29.0266C20.9215 29.2631 22.3432 29.5 23.9999 29.5C25.6566 29.5 27.0783 29.2631 28.0834 29.0266C28.4481 28.9408 28.7566 28.8553 29 28.7819ZM19 30.8594C19.143 30.8969 19.296 30.9352 19.4584 30.9734C20.5783 31.2369 22.1566 31.5 23.9999 31.5C25.8432 31.5 27.4215 31.2369 28.5415 30.9734C28.7039 30.9352 28.857 30.8969 29 30.8593V31.3027C29 31.6278 29.1581 31.9326 29.4238 32.12C29.6895 32.3073 30.0297 32.3538 30.336 32.2445L30.8861 32.0476C31.9084 31.681 32.8773 31.3346 33.5991 31.1525C33.9651 31.0602 34.3978 30.9739 34.7796 31.0077C34.9727 31.0248 35.2787 31.082 35.5514 31.3039C35.8691 31.5623 36 31.9254 36 32.2632C36 33.0011 35.7341 35.0226 35.4887 36.6401C35.363 37.4688 35.2356 38.2369 35.138 38.7408C35.0532 39.1784 34.996 39.4186 34.8841 39.6066L34.8789 39.6154C34.8619 39.6441 34.7532 39.8283 34.5331 39.9608C34.3957 40.0435 34.1746 40.1299 33.8999 40.0983C33.622 40.0664 33.4215 39.9289 33.3007 39.807C33.1778 39.6829 33.0867 39.5243 33.042 39.3574L33.0412 39.3546C32.9214 38.9125 32.8737 38.4016 32.847 37.8103C32.8399 37.6531 32.8343 37.485 32.8284 37.3111C32.8138 36.8761 32.798 36.4046 32.755 35.9745C32.7154 35.5791 32.6759 35.1962 32.6403 34.8577C32.6082 34.5525 32.4378 34.2789 32.1779 34.1156C31.918 33.9522 31.5976 33.9173 31.3086 34.0208C30.1933 34.4202 28.9231 34.8703 27.6768 35.2205C26.4313 35.5706 25.1386 35.8421 24 35.8421C22.8614 35.8421 21.5687 35.5706 20.3232 35.2205C19.1525 34.8915 17.9606 34.4744 16.8958 34.0939L16.6991 34.0236C16.4051 33.9183 16.0788 33.9564 15.8169 34.1266C15.6812 34.2148 15.5709 34.3333 15.4929 34.4703C15.4204 34.5977 15.3758 34.7411 15.3647 34.8911C15.3284 35.3816 15.2877 35.9232 15.2471 36.4517C15.1845 37.2643 15.1216 38.0517 15.074 38.5749L15.0699 38.6199C15.0277 39.0853 15.0067 39.3159 14.919 39.5089L14.9126 39.5232C14.9066 39.5369 14.8205 39.7317 14.621 39.8869C14.4923 39.987 14.2593 40.1144 13.9476 40.0961C13.6345 40.0777 13.4165 39.9225 13.2985 39.8045C13.0882 39.5943 13.0636 39.3958 12.9719 38.6579L12.9647 38.5998C12.9395 38.3974 12.9026 38.1503 12.8567 37.867C12.7764 37.3721 12.6728 36.7938 12.5645 36.1892L12.5156 35.916C12.3908 35.2182 12.2636 34.4983 12.1677 33.8701C12.075 33.2634 12 32.6722 12 32.2632C12 31.9254 12.1309 31.5623 12.4486 31.3039C12.6403 31.1479 12.8486 31.0733 13.0224 31.0368C13.0958 31.0214 13.1631 31.0128 13.2205 31.0077C13.6022 30.9739 14.0349 31.0602 14.4009 31.1525C14.5796 31.1976 14.7736 31.2528 14.9797 31.3159C15.5607 31.4936 16.2388 31.734 16.9479 31.9881L17.664 32.2445C17.9703 32.3538 18.3105 32.3073 18.5762 32.12C18.8419 31.9326 19 31.6278 19 31.3027V30.8594Z" fill="#948ABC" />
    </svg>

  )
}

export function CerebroIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.08538 28.6465C6.18497 28.8498 5.268 28.971 4.34571 29.0087C4.02317 29.0101 3.70134 28.9784 3.38525 28.9142C3.87336 30.3943 5.88874 32.756 11.2579 33.6378C11.2579 33.6378 11.2579 33.5118 11.2579 33.4331C11.2657 33.2967 11.2657 33.1601 11.2579 33.0237C11.2579 32.7088 11.2579 32.4096 11.2579 32.0947V31.6854C11.2579 31.213 11.3366 30.7721 11.3838 30.347V29.9219L11.4783 29.0402C11.4783 28.7095 11.5728 28.3789 11.6357 28.064H11.3523C9.91399 28.1135 8.48436 28.3087 7.08538 28.6465Z" fill="#948ABC" />
      <path d="M14.2809 28.3633L12.8953 28.1743C12.8953 28.5207 12.7851 28.8828 12.7378 29.2607C12.6906 29.6386 12.6434 30.0795 12.5961 30.5046C12.5489 30.9297 12.5174 31.3548 12.4859 31.78C12.4544 32.2051 12.4859 32.646 12.4859 33.0711C12.4859 33.4962 12.4859 33.9213 12.4859 34.3307C12.4859 34.7401 12.4859 35.1337 12.4859 35.5116C12.4859 35.8895 12.4859 36.2359 12.5804 36.5665C12.6749 36.8972 12.5804 37.1806 12.7064 37.4482C12.8323 37.7159 12.8008 37.9363 12.8323 38.1253C12.8638 38.3142 12.974 38.7236 12.974 38.7236C13.0685 39.2117 15.2571 39.2747 15.3515 38.6134V38.4874C15.3515 38.4874 15.3515 38.2985 15.3515 37.9678C15.3515 37.6372 15.3515 37.6214 15.3515 37.401C15.3515 37.1806 15.446 36.9287 15.4933 36.661C15.5405 36.3933 15.635 36.0942 15.7137 35.7793C15.7906 35.4542 15.8852 35.1336 15.9971 34.8188C16.0937 34.4715 16.2093 34.1299 16.3435 33.7954C16.4537 33.449 16.6112 33.1026 16.7529 32.7562C16.8946 32.4098 17.0363 32.0634 17.1937 31.7327L17.6661 30.7565C17.9338 30.2054 18.2014 29.7173 18.4534 29.2765C17.6031 29.1348 16.7686 28.9458 15.9656 28.7569L14.2809 28.3633Z" fill="#948ABC" />
      <path d="M4.34554 9.65773C5.20599 9.72663 6.06216 9.48042 6.75455 8.96494L7.06946 8.63429C6.8144 8.53284 6.55098 8.45381 6.2822 8.39811C6.23763 8.41809 6.18934 8.42842 6.14049 8.42842C6.09165 8.42842 6.04335 8.41809 5.99878 8.39811C5.93337 8.33056 5.8968 8.24022 5.8968 8.14619C5.8968 8.05216 5.93337 7.96181 5.99878 7.89426C6.07751 7.78405 6.26645 7.54787 7.5733 8.1147C8.27356 7.47726 9.0641 6.9467 9.91934 6.54018C10.6369 6.1254 11.4388 5.87783 12.2654 5.8159C12.2133 5.82501 12.16 5.82501 12.1079 5.8159C12.0673 5.79029 12.0323 5.75687 12.0047 5.71758C11.9771 5.67829 11.9577 5.63391 11.9474 5.58703C11.9372 5.54015 11.9363 5.4917 11.945 5.44449C11.9536 5.39729 11.9715 5.35227 11.9977 5.31205C12.2339 4.94991 12.9739 3.73753 12.7692 3.23368C12.7247 3.14945 12.6621 3.07612 12.5858 3.01895C12.5096 2.96178 12.4217 2.9222 12.3284 2.90303C11.9064 2.82131 11.4701 2.85949 11.0687 3.01325C10.8571 3.07185 10.6413 3.11396 10.4232 3.13921C9.7304 3.48561 9.0691 3.86349 8.43929 4.25712C8.65385 4.76446 8.81736 5.2919 8.92739 5.83164C8.94194 5.92512 8.9209 6.02065 8.86842 6.09936C8.81595 6.17807 8.73586 6.23424 8.64398 6.25676C8.55974 6.25755 8.47809 6.22761 8.41433 6.17254C8.35057 6.11748 8.30907 6.04106 8.29758 5.9576C8.2242 5.59902 8.12421 5.2464 7.99843 4.90268C7.12001 5.85208 6.04545 6.5989 4.84938 7.09126C4.10555 7.89296 3.46063 8.78104 2.92847 9.73645C3.39672 9.66029 3.87173 9.6339 4.34554 9.65773Z" fill="#948ABC" />
      <path d="M6.04614 6.00493C6.31381 5.76875 6.59723 5.54831 6.89639 5.32788C6.59723 5.54831 6.31381 5.81598 6.04614 6.00493Z" fill="#948ABC" />
      <path d="M36.5132 9.10668C37.0628 9.35365 37.5163 9.77399 37.8043 10.3033H37.9303C38.3158 10.241 38.705 10.2042 39.0954 10.1931C39.2341 9.9264 39.3298 9.63944 39.3788 9.34286C38.2294 8.5241 37.3949 8.2092 36.5132 9.10668Z" fill="#948ABC" />
      <path d="M39.5361 10.1775C39.5361 10.4294 39.5361 10.6971 39.6149 10.9333C39.5991 10.6971 39.5676 10.4294 39.5361 10.1775Z" fill="#948ABC" />
      <path d="M39.615 10.9331H39.4576C39.3819 11.0298 39.2975 11.1193 39.2057 11.2008C39.1418 11.2611 39.0573 11.2948 38.9695 11.2952C38.9168 11.2947 38.865 11.2815 38.8185 11.2568C38.7719 11.2322 38.7319 11.1968 38.7018 11.1535C38.6529 11.0902 38.6253 11.0131 38.6231 10.9331H38.0248H37.8043C37.7153 11.1492 37.5826 11.3446 37.4147 11.5072C37.2467 11.6697 37.047 11.7959 36.8281 11.8778C36.9931 12.0338 37.1457 12.2022 37.2847 12.3817C37.6042 12.1097 38.0012 11.9451 38.4194 11.9112C38.8376 11.8772 39.2559 11.9757 39.615 12.1927C39.6355 11.7731 39.6355 11.3527 39.615 10.9331Z" fill="#948ABC" />
      <path d="M8.26623 27.2452C8.05375 26.7968 7.754 26.3954 7.38451 26.0643C7.19313 25.8768 7.0143 25.6769 6.84917 25.4659C6.55398 25.6053 6.23084 25.6753 5.90445 25.6706H5.747C4.35848 25.4517 3.08047 24.7822 2.10986 23.7655C2.04445 23.6979 2.00788 23.6076 2.00788 23.5135C2.00788 23.4195 2.04445 23.3292 2.10986 23.2616C2.14084 23.2277 2.17854 23.2007 2.22056 23.1821C2.26258 23.1636 2.30799 23.1541 2.35391 23.1541C2.39983 23.1541 2.44524 23.1636 2.48726 23.1821C2.52928 23.2007 2.56698 23.2277 2.59796 23.2616C3.46073 24.0978 4.56037 24.6476 5.747 24.8361C6.7547 24.8361 6.99087 24.3638 7.32152 23.5608C7.40015 23.3694 7.49496 23.185 7.60494 23.0097C6.52362 22.2155 5.58182 21.2471 4.81804 20.1441C4.76587 20.0654 4.74503 19.9701 4.75959 19.8769C4.77416 19.7836 4.82309 19.6992 4.89676 19.6402C4.96431 19.5748 5.05465 19.5382 5.14868 19.5382C5.24271 19.5382 5.33306 19.5748 5.40061 19.6402C7.57345 22.5216 9.25819 23.7655 12.3915 22.5688C12.3726 21.7783 12.5455 20.9949 12.8953 20.2858C11.9436 19.4945 11.198 18.4841 10.7225 17.3414L10.5178 17.5461C9.64918 18.6524 8.40595 19.4028 7.02237 19.656H6.70746C6.15182 19.4993 5.63843 19.2199 5.20514 18.8384C4.77186 18.4569 4.42972 17.983 4.20397 17.4516C3.94837 18.1464 3.83746 18.8861 3.87808 19.6252C3.91869 20.3644 4.10996 21.0875 4.44015 21.7501C4.58186 22.1437 4.72357 22.5688 4.88102 23.0412C4.89548 23.0856 4.90081 23.1325 4.89668 23.179C4.89255 23.2256 4.87905 23.2708 4.85698 23.312C4.83492 23.3532 4.80475 23.3895 4.76829 23.4187C4.73183 23.4479 4.68984 23.4695 4.64484 23.482H4.53462C4.45967 23.4815 4.38693 23.4566 4.32731 23.4112C4.26769 23.3658 4.22441 23.3022 4.20397 23.2301C4.06227 22.7735 3.90482 22.3641 3.76311 21.9863C3.3585 21.1464 3.14838 20.2261 3.14838 19.2938C3.14838 18.3616 3.3585 17.4413 3.76311 16.6014L3.55842 16.2235C3.55893 16.1529 3.58006 16.084 3.61923 16.0252C3.65839 15.9665 3.71388 15.9205 3.77885 15.8929C3.86252 15.8477 3.96061 15.8372 4.05194 15.8637C4.14326 15.8902 4.2205 15.9516 4.26696 16.0346L4.47164 16.4439C5.00698 17.4989 5.76275 18.9474 6.88066 19.1049C7.99857 19.2623 9.21095 18.0814 10.0297 17.2155L10.3918 16.8533H10.4863C10.4863 16.6801 10.3761 16.5227 10.3289 16.3337C9.98533 14.8214 9.76418 13.2839 9.66756 11.7361C9.70914 11.4283 9.68276 11.1151 9.59027 10.8186C9.49778 10.5221 9.34143 10.2495 9.13223 10.0199C8.72717 9.57501 8.24085 9.2116 7.69941 8.94922C7.52621 9.12242 7.35301 9.27987 7.19556 9.46881C6.38352 10.1392 5.35017 10.4818 4.29845 10.4293C3.5838 10.4069 2.87807 10.5929 2.26731 10.9646C2.20016 11.0915 2.14228 11.223 2.09412 11.3582C1.90517 11.8463 1.73197 12.3187 1.57452 12.7911C1.59171 13.4903 1.4348 14.1829 1.11791 14.8064C1.09538 14.8553 1.06008 14.8972 1.01575 14.9276C0.971411 14.9581 0.919677 14.9761 0.865991 14.9796C0.475978 16.3449 0.202085 17.7407 0.0472397 19.1521C0.264857 19.1109 0.469773 19.0192 0.645553 18.8844C0.684839 18.8576 0.729038 18.8387 0.77562 18.8289C0.822202 18.8191 0.870259 18.8186 0.917045 18.8273C0.963831 18.8361 1.00843 18.854 1.0483 18.88C1.08817 18.906 1.12253 18.9396 1.14941 18.9789C1.17629 19.0182 1.19516 19.0624 1.20496 19.109C1.21476 19.1556 1.21529 19.2036 1.20652 19.2504C1.19775 19.2972 1.17984 19.3418 1.15383 19.3817C1.12782 19.4215 1.09422 19.4559 1.05493 19.4828C0.740497 19.7005 0.379008 19.8408 0 19.8921C0 20.396 0 20.8683 0 21.3407H0.267672C0.5132 21.375 0.748495 21.4617 0.957654 21.5948C1.16681 21.7279 1.34496 21.9043 1.48005 22.1122C1.51674 22.1484 1.54526 22.1921 1.56373 22.2402C1.5822 22.2883 1.59018 22.3398 1.58715 22.3913C1.58411 22.4427 1.57012 22.4929 1.54612 22.5386C1.52212 22.5842 1.48866 22.6241 1.44797 22.6558C1.40728 22.6874 1.36031 22.71 1.31019 22.7221C1.26007 22.7341 1.20795 22.7353 1.15733 22.7256C1.10671 22.7158 1.05875 22.6954 1.01665 22.6657C0.974557 22.6359 0.939294 22.5975 0.913225 22.5531C0.836179 22.4248 0.73348 22.3139 0.611558 22.2272C0.489635 22.1405 0.351117 22.0799 0.204689 22.0492C0.153392 22.0334 0.0985368 22.0334 0.0472397 22.0492C0.135257 22.8998 0.331015 23.7358 0.629811 24.537C0.913266 24.5393 1.19276 24.6038 1.44856 24.7259C1.7747 24.8741 2.0858 25.0534 2.37753 25.2613C2.6098 25.4649 2.88367 25.6155 3.18006 25.7025C3.47646 25.7895 3.78826 25.8109 4.09376 25.7651C4.1405 25.7585 4.1881 25.7615 4.23363 25.774C4.27916 25.7865 4.32166 25.8081 4.35852 25.8376C4.39538 25.8671 4.42583 25.9038 4.44799 25.9455C4.47015 25.9872 4.48356 26.033 4.48739 26.08C4.49254 26.1729 4.46326 26.2644 4.40516 26.337C4.34706 26.4096 4.26421 26.4583 4.17248 26.4736H3.77885C3.12956 26.4674 2.50185 26.2397 1.99964 25.8281C1.7426 25.6446 1.4684 25.4864 1.18089 25.3557H0.99195C1.1683 25.7281 1.37362 26.0861 1.60601 26.4264C3.19628 28.6465 5.14868 27.7647 8.26623 27.2452ZM1.8107 15.9086C1.62176 14.3341 2.22008 12.854 3.19628 12.5549C3.58991 12.4289 4.5976 12.3344 5.52657 14.1294C6.10914 15.2473 6.67597 15.515 6.99088 15.4205C7.30578 15.326 7.74665 14.4286 7.5577 13.1217C7.54309 13.0298 7.56557 12.9359 7.62019 12.8606C7.67482 12.7853 7.75712 12.7348 7.84899 12.7202C7.94086 12.7056 8.03477 12.7281 8.11007 12.7827C8.18537 12.8373 8.23588 12.9196 8.25049 13.0115C8.48667 14.586 8.06155 15.8141 7.21131 16.1605C6.83342 16.2707 5.87296 16.3652 4.89676 14.586C4.4244 13.6885 3.87332 13.2319 3.41671 13.3736C2.9601 13.5153 2.36178 14.586 2.51924 15.9716C2.52817 16.0652 2.50029 16.1587 2.44152 16.2322C2.38274 16.3057 2.29767 16.3534 2.20433 16.3652C2.14421 16.3772 2.08199 16.3729 2.02403 16.353C1.96607 16.333 1.91445 16.2981 1.87442 16.2516C1.8344 16.2052 1.80742 16.149 1.79622 16.0887C1.78503 16.0285 1.79002 15.9663 1.8107 15.9086Z" fill="#948ABC" />
      <path d="M1.02352 25.3086C0.913303 25.0567 0.787342 24.8048 0.692871 24.5371C0.786834 24.8009 0.897266 25.0586 1.02352 25.3086Z" fill="#948ABC" />
      <path d="M36.7343 18.4595L36.7178 18.476L36.7343 18.4595Z" fill="#948ABC" />
      <path d="M32.9861 16.8377C32.4823 16.57 32.0099 16.3181 31.6163 16.0662L30.9077 15.641L30.0103 15.0742L30.2779 16.3023C30.6243 18.0028 31.1282 20.3174 32.0886 20.648C33.3167 19.5773 34.9385 19.6246 36.8122 18.5224C36.6142 18.6447 36.4092 18.7551 36.1981 18.8531C35.2253 18.0366 34.1445 17.3584 32.9861 16.8377Z" fill="#948ABC" />
      <path d="M37.6624 13.0903C37.9315 13.724 38.0238 14.4188 37.9295 15.1008C37.8352 15.7829 37.5579 16.4266 37.1271 16.9636C37.0986 17.0131 37.0571 17.0539 37.0072 17.0816C36.9573 17.1093 36.9008 17.123 36.8437 17.1211C36.7764 17.1371 36.7063 17.1371 36.639 17.1211C36.5628 17.0643 36.5108 16.981 36.4933 16.8876C36.4758 16.7942 36.4941 16.6977 36.5445 16.6172C36.8163 16.3208 37.023 15.9708 37.1513 15.5897C37.2797 15.2086 37.3268 14.8048 37.2897 14.4044C37.2527 14.004 37.1322 13.6157 36.936 13.2647C36.7399 12.9136 36.4725 12.6075 36.1509 12.366C35.4547 12.5945 34.7448 12.7785 34.0253 12.9171L33.4742 13.043H33.3797C33.3007 13.0423 33.2241 13.0158 33.1615 12.9675C33.099 12.9191 33.054 12.8517 33.0333 12.7754C33.0091 12.6835 33.022 12.5859 33.0691 12.5034C33.1162 12.4209 33.1938 12.3603 33.2853 12.3345L33.8678 12.2086C34.7496 12.0196 37.0169 11.5315 37.2058 10.823C37.3948 10.1144 35.2692 9.27994 34.4819 8.96504L33.9938 8.7761C33.9293 8.74507 33.8754 8.6956 33.8389 8.63394C33.8025 8.57228 33.7852 8.50121 33.7891 8.4297C33.7931 8.3534 33.8212 8.28032 33.8693 8.22093C33.9174 8.16154 33.983 8.11888 34.0568 8.09905C34.2955 8.03869 34.5166 7.9232 34.7026 7.76187C34.8885 7.60053 35.034 7.39785 35.1275 7.17008C35.1749 7.01693 35.1763 6.85322 35.1315 6.69928C35.0867 6.54533 34.9977 6.40792 34.8755 6.3041C34.8101 6.23655 34.7735 6.1462 34.7735 6.05217C34.7735 5.95814 34.8101 5.8678 34.8755 5.80025C34.9079 5.76594 34.947 5.73861 34.9903 5.71992C35.0336 5.70124 35.0803 5.6916 35.1275 5.6916C35.1746 5.6916 35.2213 5.70124 35.2646 5.71992C35.308 5.73861 35.347 5.76594 35.3794 5.80025C35.5845 6.00056 35.731 6.25307 35.8032 6.53054C35.8753 6.80802 35.8703 7.09992 35.7888 7.37477C35.6436 7.79611 35.3678 8.16015 35.0015 8.41396C35.2692 8.52417 35.5526 8.63439 35.836 8.7761C36.1915 8.29862 36.7183 7.97765 37.3056 7.88074C37.893 7.78383 38.495 7.91854 38.985 8.2565C38.4985 6.80884 37.7748 5.45203 36.8437 4.24148C34.844 1.7065 30.9235 0.320919 26.4046 0.00601438C26.6565 0.84051 27.0659 0.856256 27.743 0.887746C28.153 0.843722 28.5671 0.916433 28.9376 1.0975C29.3081 1.27857 29.6199 1.56063 29.8371 1.91118C29.8629 1.95016 29.8805 1.99397 29.889 2.03995C29.8974 2.08594 29.8965 2.13316 29.8862 2.17877C29.8759 2.22437 29.8564 2.26742 29.8291 2.30532C29.8017 2.34322 29.7669 2.37518 29.7269 2.39929C29.6655 2.4197 29.5992 2.4197 29.5379 2.39929C29.4769 2.40083 29.4167 2.38546 29.3639 2.35489C29.3111 2.32433 29.2678 2.27975 29.2387 2.22609C29.0718 1.97034 28.834 1.76868 28.5545 1.64567C28.2749 1.52266 27.9656 1.48362 27.6642 1.5333H27.2549C27.2701 1.6526 27.3019 1.76919 27.3493 1.87969C27.4439 2.07215 27.5026 2.28024 27.5225 2.49376C27.9887 2.50725 28.4481 2.60875 28.8766 2.79292L29.5064 3.10782C29.9122 3.37926 30.3881 3.52696 30.8762 3.53294H31.0022C31.0685 3.51015 31.1406 3.51015 31.2069 3.53294C31.2638 3.49815 31.3292 3.47974 31.3958 3.47974C31.4625 3.47974 31.5279 3.49815 31.5848 3.53294L31.695 3.62741C31.7755 3.66245 31.842 3.72341 31.8839 3.80061C33.0333 4.79256 33.4585 4.95001 33.6474 4.88703C33.8364 4.82405 33.7419 4.77681 33.7576 4.63511C33.9466 3.54869 31.569 2.30481 30.7818 1.91118L30.892 1.56479L31.1124 1.26563C32.1988 1.83246 34.7338 3.15506 34.4662 4.76107C34.4531 4.93577 34.3916 5.10339 34.2888 5.2452C34.1859 5.387 34.0456 5.49741 33.8836 5.56407C33.7845 5.58052 33.6835 5.58052 33.5844 5.56407C32.7424 5.34396 31.9822 4.88457 31.3958 4.24148C31.2365 4.30732 31.0638 4.33431 30.892 4.3202C30.2886 4.31864 29.6984 4.14375 29.1915 3.81635L28.6089 3.53294C28.0758 3.34365 27.5088 3.26827 26.9447 3.31166C26.3806 3.35505 25.8319 3.51625 25.3339 3.78486L24.2475 4.24148C24.2031 4.25492 24.1564 4.25947 24.1102 4.25487C24.064 4.25028 24.0191 4.23662 23.9782 4.21469C23.9372 4.19276 23.901 4.16298 23.8716 4.12705C23.8422 4.09113 23.8201 4.04975 23.8067 4.0053C23.7932 3.96084 23.7887 3.91417 23.7933 3.86796C23.7979 3.82175 23.8115 3.77689 23.8334 3.73595C23.8554 3.69501 23.8851 3.65879 23.9211 3.62937C23.957 3.59994 23.9984 3.57787 24.0428 3.56443C24.4207 3.45421 24.7671 3.32825 25.1135 3.20229C25.6532 2.96116 26.2183 2.78158 26.7982 2.66695C26.7954 2.52854 26.7575 2.39311 26.688 2.27332C26.5626 2.01984 26.5239 1.7322 26.5778 1.45457C26.3521 1.32798 26.1565 1.1541 26.0043 0.94484C25.8521 0.735579 25.747 0.495888 25.6961 0.242193C25.6721 0.170675 25.6721 0.0932773 25.6961 0.0217599C23.547 -0.0562449 21.3955 0.0755896 19.272 0.41539H19.5082C19.694 0.751642 19.9803 1.02139 20.327 1.18691C20.9544 1.37124 21.6158 1.4089 22.2601 1.29696C22.9044 1.18503 23.5143 0.926505 24.0428 0.541352C24.0828 0.516184 24.1274 0.499445 24.1741 0.492163C24.2207 0.484881 24.2684 0.48721 24.3141 0.499006C24.3598 0.510802 24.4026 0.531816 24.4399 0.560759C24.4772 0.589702 24.5082 0.625962 24.5309 0.667313C24.563 0.74172 24.5679 0.824998 24.5449 0.902667C24.5219 0.980336 24.4724 1.04748 24.405 1.09243C23.5107 1.65782 22.4858 1.98319 21.4291 2.03715C21.7365 2.80247 22.216 3.48671 22.8304 4.03679C23.19 4.39851 23.5266 4.7824 23.8381 5.18619C23.9036 5.25374 23.9401 5.34408 23.9401 5.43811C23.9401 5.53214 23.9036 5.62249 23.8381 5.69003C23.7662 5.71103 23.6897 5.71103 23.6177 5.69003C23.5624 5.69203 23.5074 5.6801 23.4579 5.65534C23.4084 5.63058 23.3659 5.59379 23.3343 5.54833C23.035 5.16831 22.7143 4.80559 22.3738 4.46191C21.6044 3.77192 21.029 2.89253 20.7048 1.91118C20.4937 1.86423 20.2879 1.79564 20.0908 1.7065C19.5251 1.44759 19.076 0.987323 18.8312 0.41539C17.7605 0.604333 16.7056 0.84051 15.6821 1.12392C16.0595 1.51601 16.4118 1.93146 16.7371 2.3678C17.2856 3.15246 17.9678 3.83463 18.7524 4.38318L19.3508 4.76107C20.5316 5.4696 21.4606 6.05218 21.6811 7.01263C22.3628 6.3153 23.2751 5.88994 24.2475 5.816C24.6402 5.83376 25.0228 5.94611 25.3627 6.14349C25.7026 6.34086 25.9898 6.61743 26.1999 6.94965C26.2504 7.03014 26.2687 7.12667 26.2512 7.22004C26.2337 7.31341 26.1816 7.39676 26.1055 7.4535C26.0674 7.48003 26.0245 7.49865 25.9791 7.50827C25.9338 7.51789 25.8869 7.51831 25.8414 7.5095C25.7959 7.50069 25.7526 7.48283 25.7141 7.45698C25.6756 7.43114 25.6427 7.39783 25.6174 7.35903C25.4672 7.11828 25.2617 6.91692 25.0179 6.77175C24.7742 6.62658 24.4992 6.54182 24.216 6.52453C23.6835 6.5814 23.1693 6.75128 22.7077 7.02281C22.2461 7.29433 21.8478 7.66125 21.5393 8.09905C21.4311 8.56774 21.2561 9.01846 21.0197 9.4374C22.1971 9.7891 23.2406 10.4885 24.0133 11.4439C24.786 12.3993 25.2519 13.5659 25.3497 14.7908C25.9795 14.4444 26.1842 13.6729 26.4046 12.7911C26.5283 12.1046 26.8025 11.4539 27.2076 10.886C27.24 10.8516 27.279 10.8243 27.3224 10.8056C27.3657 10.7869 27.4124 10.7773 27.4595 10.7773C27.5067 10.7773 27.5534 10.7869 27.5967 10.8056C27.64 10.8243 27.6791 10.8516 27.7115 10.886C27.7734 10.9552 27.8077 11.0449 27.8077 11.1379C27.8077 11.2308 27.7734 11.3205 27.7115 11.3898C27.3771 11.8592 27.1512 12.397 27.0502 12.9643C26.7825 13.972 26.4833 15.0899 25.3812 15.515C25.3812 16.5227 25.3812 17.5777 25.3812 18.6641C25.3735 18.7561 25.3325 18.8421 25.2658 18.9059C25.1991 18.9698 25.1113 19.0069 25.019 19.0105C24.923 19.0105 24.8309 18.9723 24.763 18.9044C24.695 18.8365 24.6569 18.7444 24.6569 18.6483C24.7514 14.161 24.4994 11.3583 20.3112 9.97273C20.2585 9.95828 20.2105 9.93036 20.1718 9.89171C20.1332 9.85306 20.1052 9.80501 20.0908 9.7523C20.0673 9.70594 20.055 9.6547 20.055 9.60272C20.055 9.55074 20.0673 9.4995 20.0908 9.45314C20.3943 8.96531 20.6226 8.43451 20.7678 7.87862C20.7604 7.8529 20.7604 7.82561 20.7678 7.79989C20.941 6.72922 20.1853 6.22537 18.7524 5.37513L18.1384 5.01299C17.2882 4.41498 16.5478 3.67456 15.9498 2.82441C15.6003 2.32569 15.2163 1.85217 14.8004 1.40734C14.0289 1.64352 13.2259 1.92693 12.5173 2.22609C12.7227 2.26625 12.9143 2.35821 13.0742 2.49323C13.234 2.62825 13.3567 2.80187 13.4306 2.9976C13.7297 3.78486 13.1786 4.8083 12.5961 5.70578C12.544 5.78006 12.4648 5.83094 12.3756 5.84749C13.293 5.81465 14.2069 5.97737 15.0566 6.32485C15.9063 6.67232 16.6724 7.19661 17.3039 7.86287C18.3655 9.02517 18.9306 10.5565 18.8784 12.1298L19.272 11.7677C19.6148 11.327 20.0725 10.9892 20.5946 10.7915C21.2874 10.6498 21.996 11.2796 22.6258 11.8307C22.8108 12.0056 23.011 12.1637 23.2241 12.303C23.2629 12.3284 23.2962 12.3613 23.322 12.3998C23.3479 12.4383 23.3657 12.4816 23.3745 12.5271C23.3834 12.5726 23.3829 12.6194 23.3733 12.6648C23.3637 12.7101 23.3451 12.7531 23.3186 12.7911C23.2945 12.8312 23.2625 12.866 23.2246 12.8933C23.1867 12.9207 23.1436 12.9401 23.098 12.9504C23.0524 12.9607 23.0052 12.9617 22.9592 12.9533C22.9132 12.9448 22.8694 12.9272 22.8304 12.9013C22.5972 12.7393 22.3762 12.5604 22.1692 12.366C21.7125 11.9724 21.067 11.4213 20.7206 11.4843C20.3611 11.6947 20.037 11.9603 19.7601 12.2715C19.4805 12.5721 19.169 12.8413 18.8312 13.0745C18.7433 13.9267 18.6067 14.7731 18.4218 15.6095C18.3988 15.6888 18.3514 15.7587 18.2864 15.8096C18.2214 15.8605 18.1421 15.8896 18.0596 15.8929C18.0122 15.8856 17.9667 15.8684 17.9262 15.8426C17.8857 15.8167 17.851 15.7827 17.8244 15.7428C17.7977 15.7028 17.7797 15.6577 17.7714 15.6103C17.7631 15.563 17.7647 15.5145 17.7762 15.4678C17.9867 14.6092 18.1289 13.7352 18.2014 12.8541C18.3143 12.0624 18.2546 11.2556 18.0263 10.4892C17.798 9.72277 17.4065 9.01481 16.8788 8.41396C16.0655 7.55146 15.0029 6.96482 13.8397 6.73613C12.6766 6.50745 11.471 6.64817 10.3917 7.13859C9.68496 7.49252 9.02403 7.93138 8.42358 8.44545C9.07794 8.70682 9.63443 9.16586 10.0155 9.75858C10.3965 10.3513 10.5831 11.0481 10.5492 11.7519C10.642 13.243 10.8633 14.7233 11.2105 16.1763C12.3127 21.0101 17.3039 22.2382 21.9172 22.994C22.3738 22.7106 22.8462 22.4272 23.3658 22.1438C23.4495 22.0986 23.5475 22.0881 23.6389 22.1146C23.7302 22.1411 23.8074 22.2025 23.8539 22.2855C23.8779 22.3274 23.893 22.3738 23.898 22.4218C23.9031 22.4699 23.898 22.5184 23.8832 22.5644C23.8684 22.6103 23.8441 22.6527 23.8119 22.6887C23.7798 22.7248 23.7404 22.7537 23.6964 22.7736C22.9407 23.183 22.2479 23.6238 21.5708 24.0332L20.9095 24.4426C21.1296 24.694 21.2971 24.9869 21.4022 25.3041C21.5073 25.6213 21.5479 25.9563 21.5215 26.2894C21.4951 26.6225 21.4022 26.947 21.2485 27.2436C21.0947 27.5403 20.8831 27.8031 20.6261 28.0167C20.5586 28.0822 20.4682 28.1187 20.3742 28.1187C20.2802 28.1187 20.1898 28.0822 20.1223 28.0167C20.088 27.9844 20.0606 27.9453 20.0419 27.902C20.0233 27.8587 20.0136 27.812 20.0136 27.7648C20.0136 27.7176 20.0233 27.671 20.0419 27.6276C20.0606 27.5843 20.088 27.5453 20.1223 27.5129C20.3214 27.3544 20.4849 27.1558 20.602 26.9299C20.7192 26.704 20.7874 26.4559 20.8023 26.2018C20.8172 25.9478 20.7783 25.6935 20.6883 25.4554C20.5982 25.2174 20.459 25.0011 20.2797 24.8205C19.1914 25.5005 18.0005 26.0002 16.7528 26.3005H16.6268C16.1072 26.3942 15.5803 26.4416 15.0523 26.4422C14.2987 26.4324 13.5487 26.3374 12.8165 26.1588C12.5176 26.4321 12.1841 26.6651 11.8245 26.8516L11.5569 26.9933C12.5443 27.0099 13.5288 27.1047 14.5012 27.2767L16.2647 27.6546C16.2846 27.6067 16.3146 27.5636 16.3527 27.5283C16.3907 27.493 16.4359 27.4662 16.4851 27.4499C16.5315 27.4264 16.5827 27.4141 16.6347 27.4141C16.6867 27.4141 16.7379 27.4264 16.7843 27.4499L17.1464 27.6703L17.6345 27.9695L18.8154 28.1899C18.8867 28.1013 18.9402 27.9997 18.9729 27.8908C18.9863 27.8358 19.0137 27.7853 19.0523 27.7439C19.0909 27.7026 19.1394 27.6718 19.1933 27.6546C19.2445 27.6284 19.3011 27.6147 19.3586 27.6147C19.4161 27.6147 19.4728 27.6284 19.524 27.6546L20.0593 28.0797L20.3584 28.3316C21.579 28.431 22.8076 28.3299 23.9956 28.0325L24.153 27.9223C24.5584 27.5793 25.0087 27.2933 25.4914 27.072C25.3655 26.5568 25.1751 26.0595 24.9246 25.592C24.4902 24.8456 24.2569 23.9993 24.2475 23.1357C24.2495 23.0902 24.2605 23.0456 24.2798 23.0043C24.2991 22.963 24.3264 22.926 24.36 22.8953C24.3936 22.8646 24.433 22.8408 24.4759 22.8253C24.5187 22.8098 24.5642 22.803 24.6097 22.8051C24.6565 22.805 24.7029 22.8145 24.746 22.8329C24.789 22.8512 24.8279 22.8782 24.8603 22.912C24.8927 22.9459 24.9179 22.986 24.9343 23.0298C24.9508 23.0737 24.9582 23.1204 24.956 23.1672C24.9825 23.8957 25.1938 24.6055 25.5701 25.2298C25.8219 25.6875 26.0175 26.1738 26.1527 26.6784C26.2251 26.7193 26.285 26.7792 26.3259 26.8516C26.3405 26.9084 26.3405 26.968 26.3259 27.0248C27.1921 26.5779 28.0144 26.0507 28.7821 25.4503C28.4918 24.7825 28.0808 24.174 27.5698 23.6553C27.5272 23.6237 27.4922 23.5832 27.467 23.5366C27.4419 23.4899 27.4273 23.4384 27.4242 23.3855C27.4212 23.3326 27.4298 23.2797 27.4494 23.2305C27.469 23.1813 27.4992 23.137 27.5378 23.1007C27.5764 23.0644 27.6225 23.0371 27.6728 23.0206C27.7232 23.004 27.7765 22.9988 27.8291 23.0051C27.8817 23.0115 27.9323 23.0293 27.9772 23.0573C28.0222 23.0853 28.0605 23.1228 28.0894 23.1672C28.6142 23.6999 29.0454 24.3174 29.3647 24.9937C30.2779 24.1434 30.2464 23.2774 30.7818 22.1438C30.4091 21.7507 29.9791 21.4163 29.5064 21.1518C29.1326 20.9744 28.7156 20.9083 28.3052 20.9614C27.8948 21.0144 27.5083 21.1844 27.1919 21.451C26.5923 21.8577 25.8853 22.0769 25.1607 22.0808C23.9484 22.0808 23.3028 20.8527 22.736 19.8292C22.4694 19.2406 22.0956 18.7067 21.6338 18.2547C20.9157 17.8372 20.0808 17.6658 19.2563 17.7666H18.7052C18.0037 17.7873 17.309 17.6245 16.6898 17.2943C15.0051 16.2866 14.391 14.0192 13.8872 12.1928L13.651 11.3426C13.6365 11.2981 13.6312 11.2512 13.6353 11.2047C13.6395 11.1582 13.653 11.1129 13.675 11.0717C13.6971 11.0306 13.7273 10.9943 13.7637 10.965C13.8002 10.9358 13.8422 10.9143 13.8872 10.9017C13.9316 10.8872 13.9785 10.8819 14.025 10.886C14.0716 10.8902 14.1168 10.9037 14.158 10.9257C14.1992 10.9478 14.2355 10.978 14.2647 11.0144C14.2939 11.0509 14.3155 11.0929 14.328 11.1379C14.328 11.4055 14.4855 11.689 14.5642 12.0039C15.0366 13.7043 15.6191 15.8299 17.052 16.7274C17.5376 16.9797 18.0794 17.1043 18.6265 17.0896L18.9886 16.8219C20.138 15.9559 21.3189 15.0742 21.2087 13.7988C21.1975 13.7461 21.1983 13.6915 21.2109 13.639C21.2235 13.5866 21.2476 13.5376 21.2816 13.4957C21.3155 13.4538 21.3584 13.42 21.4071 13.3968C21.4558 13.3736 21.509 13.3616 21.563 13.3616C21.6169 13.3616 21.6701 13.3736 21.7188 13.3968C21.7675 13.42 21.8104 13.4538 21.8443 13.4957C21.8783 13.5376 21.9024 13.5866 21.9151 13.639C21.9277 13.6915 21.9284 13.7461 21.9172 13.7988C21.8821 14.4957 21.6681 15.1718 21.2958 15.762C20.9235 16.3522 20.4055 16.8365 19.7916 17.1683C20.606 17.1224 21.4131 17.3436 22.0904 17.7981C22.6372 18.3009 23.0811 18.9052 23.3973 19.5773C23.9169 20.522 24.4207 21.4195 25.2237 21.4667C25.7895 21.4327 26.3347 21.2419 26.7982 20.9157C27.2203 20.5936 27.7234 20.3951 28.2517 20.3422C28.7799 20.2894 29.3124 20.3844 29.7898 20.6165C30.2686 20.8797 30.7085 21.2082 31.0967 21.5927C31.1912 21.451 31.3014 21.2778 31.4273 21.1203C30.2779 20.459 29.8528 18.3019 29.4277 16.3968C29.3506 15.6896 29.1975 14.9928 28.9711 14.3184C28.7034 11.8622 29.4749 11.1694 30.9865 9.70506C32.1516 8.6029 31.8525 7.31179 30.9865 5.59556C30.9647 5.55319 30.9515 5.50693 30.9476 5.45945C30.9437 5.41196 30.9493 5.36418 30.9639 5.31884C30.9785 5.2735 31.002 5.23148 31.0328 5.19521C31.0637 5.15894 31.1015 5.12912 31.1439 5.10746C31.2278 5.06833 31.3236 5.06285 31.4114 5.09213C31.4993 5.12142 31.5726 5.18325 31.6163 5.26491C32.4665 6.9654 33.0176 8.72886 31.4588 10.2247C29.9 11.7204 29.4749 12.1141 29.6639 14.0822C30.215 14.4759 30.7345 14.7908 31.2384 15.1214L31.9312 15.5465C32.3248 15.7827 32.7814 16.0346 33.2853 16.3023C34.5393 16.8183 35.7032 17.5305 36.7335 18.4122C36.898 18.3182 37.0558 18.213 37.2058 18.0973C38.424 16.6553 39.2245 14.9074 39.5204 13.043C39.2649 12.8088 38.9284 12.6828 38.5819 12.6916C38.2353 12.7004 37.9057 12.8433 37.6624 13.0903ZM16.3749 4.24148C15.7923 4.147 15.3672 4.24148 15.1783 4.39893C15.1077 4.51307 15.0628 4.64114 15.0465 4.77433C15.0302 4.90751 15.0429 5.04265 15.0838 5.17044C15.1028 5.26216 15.0856 5.35769 15.0357 5.43696C14.9858 5.51623 14.9071 5.57308 14.8161 5.59556H14.8004C14.7185 5.59693 14.6387 5.5692 14.5753 5.51731C14.5119 5.46542 14.4689 5.39273 14.454 5.31215C14.3847 5.07048 14.3742 4.81572 14.4235 4.56918C14.4728 4.32264 14.5805 4.0915 14.7374 3.89508C14.9872 3.69244 15.2826 3.55359 15.5981 3.4905C15.9135 3.42741 16.2396 3.44198 16.5481 3.53294C16.6416 3.54844 16.7254 3.6 16.7813 3.67654C16.8372 3.75308 16.8609 3.8485 16.8473 3.94232C16.8406 3.99535 16.8224 4.04626 16.7937 4.0914C16.7651 4.13653 16.7268 4.17477 16.6817 4.20336C16.6365 4.23196 16.5856 4.25021 16.5326 4.2568C16.4795 4.26339 16.4257 4.25815 16.3749 4.24148ZM28.4515 10.5396C28.4227 10.5992 28.3782 10.6498 28.3226 10.6859C28.2671 10.722 28.2028 10.7422 28.1366 10.7442H27.9791C27.9367 10.7226 27.899 10.6928 27.8681 10.6565C27.8372 10.6202 27.8137 10.5782 27.7991 10.5329C27.7845 10.4875 27.779 10.4397 27.7828 10.3923C27.7867 10.3448 27.7999 10.2985 27.8217 10.2561C28.2789 9.42412 28.5265 8.49318 28.543 7.54391C28.5595 6.59465 28.3443 5.65568 27.9162 4.8083C27.8982 4.76597 27.8888 4.72047 27.8886 4.67447C27.8883 4.62847 27.8973 4.58289 27.9149 4.54038C27.9325 4.49787 27.9583 4.4593 27.991 4.4269C28.0237 4.3945 28.0624 4.36894 28.1051 4.35169C28.1482 4.33116 28.1952 4.31977 28.2429 4.31825C28.2907 4.31673 28.3382 4.32511 28.3826 4.34285C28.427 4.3606 28.4672 4.38733 28.5007 4.42137C28.5342 4.4554 28.5604 4.49601 28.5774 4.54063C29.0527 5.48629 29.2923 6.53282 29.2759 7.59105C29.2594 8.64929 28.9874 9.68786 28.483 10.6183L28.4515 10.5396Z" fill="#948ABC" />
      <path d="M12.6119 23.4507C11.8742 23.7432 11.0907 23.9031 10.2974 23.923C9.61608 23.9146 8.94467 23.7588 8.32923 23.4664C8.2277 23.633 8.13825 23.8066 8.06157 23.986C7.88618 24.3605 7.66967 24.7143 7.41602 25.0409L7.88837 25.5763C8.38221 26.0002 8.76126 26.5417 8.99054 27.1508C9.41566 27.1508 9.88801 27.0406 10.3604 27.0091C10.6697 26.6657 11.0444 26.3874 11.4625 26.1903L11.9506 25.9069C11.1004 25.6865 10.0927 25.4346 9.06926 25.2456C8.98076 25.2215 8.90471 25.1647 8.85648 25.0866C8.80824 25.0086 8.79142 24.9152 8.80942 24.8252C8.82741 24.7353 8.87887 24.6555 8.9534 24.602C9.02793 24.5485 9.11999 24.5253 9.21097 24.5371C10.5336 24.8048 11.8089 25.1197 12.7694 25.3873C13.3522 25.5405 13.9477 25.6406 14.5486 25.6865C13.839 25.3466 13.251 24.797 12.8639 24.112C12.7533 23.9026 12.6687 23.6805 12.6119 23.4507Z" fill="#948ABC" />
      <path d="M16.5324 25.529C18.0902 25.1023 19.5647 24.4156 20.8938 23.4979C18.2929 23.1767 15.7939 22.29 13.5723 20.8999C13.3482 21.3415 13.2314 21.8297 13.2314 22.3248C13.2314 22.82 13.3482 23.3082 13.5723 23.7498C13.8926 24.2568 14.3271 24.6818 14.8411 24.9908C15.3551 25.2997 15.9343 25.484 16.5324 25.529Z" fill="#948ABC" />
    </svg>

  )
}

export function DonationIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.9899 23.6349C23.5741 24.0562 23.1615 24.4743 22.7735 25.0068V26H17V25.0068C17.0978 24.2339 17.597 22.8414 17.612 22.4543C17.6329 21.9098 18.3979 20.9175 18.3979 20.9175L20.7456 18.0888C20.7456 18.0888 21.4102 17.4184 21.7905 16.6748C22.1708 15.9312 22.9801 16.8675 23.0877 17.5365C23.1952 18.2056 22.9906 18.5582 22.9906 18.5582L21.6491 21.1046C21.6491 21.1046 23.2044 19.0703 23.6872 18.2521C23.9317 17.8377 24.0002 16.9602 24.0766 15.9795C24.1511 15.0243 24.2332 13.971 24.4932 13.152C25.0202 11.4924 26.5455 11.9079 26.8099 12.6494C27.0744 13.3909 27.0145 18.2905 26.9185 19.1074C26.8434 19.7471 26.4398 20.3727 25.9845 21.0784C25.8584 21.2739 25.7283 21.4755 25.6002 21.6853C25.0903 22.5198 24.5373 23.0802 23.9899 23.6349Z" fill="#948ABC" />
      <path d="M18 31C17.4477 31 17 30.5523 17 30V28C17 27.4477 17.4477 27 18 27H22C22.5523 27 23 27.4477 23 28V30C23 30.5523 22.5523 31 22 31H18Z" fill="#948ABC" />
      <path d="M2.95688 23.6349C3.37408 24.0562 3.78798 24.4743 4.17728 25.0068V26H9.99998V25.0068C9.90188 24.2339 9.72988 22.8414 9.71498 22.4543C9.69388 21.9098 8.92637 20.9175 8.92637 20.9175L6.57078 18.0888C6.57078 18.0888 5.90398 17.4184 5.52238 16.6748C5.14088 15.9312 4.32888 16.8675 4.22088 17.5365C4.11298 18.2056 4.31828 18.5582 4.31828 18.5582L5.66428 21.1046C5.66428 21.1046 4.10388 19.0703 3.61938 18.2521C3.37408 17.8377 3.30538 16.9602 3.22868 15.9795C3.15398 15.0243 3.07158 13.971 2.81068 13.152C2.28198 11.4924 0.751576 11.9079 0.486276 12.6494C0.220876 13.3909 -0.077834 18.2905 0.018476 19.1074C0.093776 19.7471 0.498775 20.3727 0.955575 21.0784C1.08208 21.2739 1.21258 21.4755 1.34118 21.6853C1.85278 22.5198 2.40758 23.0802 2.95688 23.6349Z" fill="#948ABC" />
      <path d="M9 31C9.5523 31 10 30.5523 10 30V28C10 27.4477 9.5523 27 9 27H5C4.4477 27 4 27.4477 4 28V30C4 30.5523 4.4477 31 5 31H9Z" fill="#948ABC" />
      <path d="M5 6.2069C5 2.9864 7.018 0 9.7812 0C11.6988 0 13.1217 1.3399 14 3.2406C14.8782 1.34 16.3011 0 18.2188 0C20.9823 0 23 2.9869 23 6.2069C23 13.1 14 18 14 18C14 18 5 13.3965 5 6.2069Z" fill="#948ABC" />
    </svg>

  )
}

export function HistoryIconThree({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 7.49992C10.373 7.49992 9.99992 7.87302 9.99992 8.33325V34.1666C9.99992 34.6268 10.373 34.9999 10.8333 34.9999H29.1666C29.6268 34.9999 29.9999 34.6268 29.9999 34.1666V8.33325C29.9999 7.87302 29.6268 7.49992 29.1666 7.49992H24.5138V5.83325H29.1666C30.5473 5.83325 31.6666 6.95254 31.6666 8.33325V34.1666C31.6666 35.5473 30.5473 36.6666 29.1666 36.6666H10.8333C9.4525 36.6666 8.33325 35.5473 8.33325 34.1666V8.33325C8.33325 6.95254 9.4525 5.83325 10.8333 5.83325H15.486V7.49992H10.8333Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 5.83325C14.1667 4.45254 15.286 3.33325 16.6667 3.33325H23.3334C24.7142 3.33325 25.8334 4.45254 25.8334 5.83325V7.49992C25.8334 8.88067 24.7142 9.99992 23.3334 9.99992H16.6667C15.286 9.99992 14.1667 8.88067 14.1667 7.49992V5.83325ZM16.6667 4.99992C16.2065 4.99992 15.8334 5.37302 15.8334 5.83325V7.49992C15.8334 7.96015 16.2065 8.33325 16.6667 8.33325H23.3334C23.7937 8.33325 24.1667 7.96015 24.1667 7.49992V5.83325C24.1667 5.37302 23.7937 4.99992 23.3334 4.99992H16.6667Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 17.5001C12.5 17.0398 12.8731 16.6667 13.3333 16.6667H19.1667C19.6269 16.6667 20 17.0398 20 17.5001C20 17.9603 19.6269 18.3334 19.1667 18.3334H13.3333C12.8731 18.3334 12.5 17.9603 12.5 17.5001Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 13.3333C12.5 12.8731 12.8731 12.5 13.3333 12.5H26.25C26.7102 12.5 27.0833 12.8731 27.0833 13.3333C27.0833 13.7936 26.7102 14.1667 26.25 14.1667H13.3333C12.8731 14.1667 12.5 13.7936 12.5 13.3333Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 24.1667V25.8333H15.8333V24.1667H14.1667ZM13.3333 22.5C12.8731 22.5 12.5 22.8731 12.5 23.3333V26.6667C12.5 27.1269 12.8731 27.5 13.3333 27.5H16.6667C17.1269 27.5 17.5 27.1269 17.5 26.6667V23.3333C17.5 22.8731 17.1269 22.5 16.6667 22.5H13.3333Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23.3333 24.1666C23.794 24.1666 24.1666 23.794 24.1666 23.3333C24.1666 22.8725 23.794 22.4999 23.3333 22.4999C22.8725 22.4999 22.4999 22.8725 22.4999 23.3333C22.4999 23.794 22.8725 24.1666 23.3333 24.1666ZM23.3333 25.8333C24.7145 25.8333 25.8333 24.7145 25.8333 23.3333C25.8333 21.952 24.7145 20.8333 23.3333 20.8333C21.952 20.8333 20.8333 21.952 20.8333 23.3333C20.8333 24.7145 21.952 25.8333 23.3333 25.8333Z" fill="#948ABC" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9999 29.3995C20.0105 29.3872 20.0253 29.371 20.0457 29.3511C20.1821 29.2176 20.446 29.0407 20.8593 28.8652C21.6925 28.5112 22.7206 28.3334 23.3333 28.3334C23.9459 28.3334 24.974 28.5112 25.8073 28.8652C26.2205 29.0407 26.4844 29.2176 26.6208 29.3511C26.6412 29.371 26.656 29.3872 26.6666 29.3995V30.8334H19.9999V29.3995ZM23.3333 26.6667C21.6645 26.6667 18.3333 27.555 18.3333 29.3182V32.5001H28.3333V29.3182C28.3333 27.555 25.002 26.6667 23.3333 26.6667Z" fill="#948ABC" />
    </svg>

  )
}

export function CampanaNotificIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} className="" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7295 25C13.5537 25.3031 13.3014 25.5547 12.9978 25.7295C12.6941 25.9044 12.3499 25.9965 11.9995 25.9965C11.6492 25.9965 11.3049 25.9044 11.0013 25.7295C10.6977 25.5547 10.4453 25.3031 10.2695 25M18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 19 3 21 3 21H21C21 21 18 19 18 12Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19.5" cy="5.5" r="5.5" fill="#FF0000" />
    </svg>
  )
}

// Notificaciones del Paciente

export function NewMedicationIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 13.125C17.2437 13.125 19.0625 11.3062 19.0625 9.0625C19.0625 6.81881 17.2437 5 15 5C12.7563 5 10.9375 6.81881 10.9375 9.0625C10.9375 11.3062 12.7563 13.125 15 13.125ZM15 14.375C17.934 14.375 20.3125 11.9965 20.3125 9.0625C20.3125 6.12849 17.934 3.75 15 3.75C12.066 3.75 9.6875 6.12849 9.6875 9.0625C9.6875 11.9965 12.066 14.375 15 14.375Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2402 6.19375C15.5842 6.22256 15.8397 6.52477 15.8109 6.86871L15.4346 11.3608C15.4058 11.7048 15.1036 11.9603 14.7596 11.9315C14.4157 11.9026 14.1602 11.6005 14.189 11.2565L14.5653 6.7644C14.5941 6.4204 14.8963 6.16493 15.2402 6.19375Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9.0625 25C11.3062 25 13.125 23.1812 13.125 20.9375C13.125 18.6938 11.3062 16.875 9.0625 16.875C6.81881 16.875 5 18.6938 5 20.9375C5 23.1812 6.81881 25 9.0625 25ZM9.0625 26.25C11.9965 26.25 14.375 23.8715 14.375 20.9375C14.375 18.0035 11.9965 15.625 9.0625 15.625C6.12849 15.625 3.75 18.0035 3.75 20.9375C3.75 23.8715 6.12849 26.25 9.0625 26.25Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.0982 22.9733C10.8541 23.2174 10.4584 23.2174 10.2143 22.9733L7.0268 19.7858C6.78273 19.5417 6.78273 19.146 7.0268 18.9019C7.27092 18.6579 7.66661 18.6579 7.91067 18.9019L11.0982 22.0894C11.3423 22.3335 11.3423 22.7292 11.0982 22.9733Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.9375 23.75C23.1812 23.75 25 21.9312 25 19.6875C25 17.4438 23.1812 15.625 20.9375 15.625C18.6938 15.625 16.875 17.4438 16.875 19.6875C16.875 21.9312 18.6938 23.75 20.9375 23.75ZM20.9375 25C23.8715 25 26.25 22.6215 26.25 19.6875C26.25 16.7535 23.8715 14.375 20.9375 14.375C18.0035 14.375 15.625 16.7535 15.625 19.6875C15.625 22.6215 18.0035 25 20.9375 25Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23.5993 18.5907C23.7308 18.9098 23.5787 19.2751 23.2596 19.4067L19.0918 21.1242C18.7727 21.2557 18.4073 21.1037 18.2758 20.7845C18.1443 20.4653 18.2964 20.1 18.6155 19.9685L22.7833 18.2509C23.1025 18.1194 23.4678 18.2715 23.5993 18.5907Z" fill="#484848" />
    </svg>

  )
}

export function ScannerPatientsIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.125 5.625C18.125 7.35087 16.7259 8.75 15 8.75C13.2741 8.75 11.875 7.35087 11.875 5.625C11.875 3.89911 13.2741 2.5 15 2.5C16.7259 2.5 18.125 3.89911 18.125 5.625ZM16.875 5.625C16.875 6.66056 16.0356 7.5 15 7.5C13.9644 7.5 13.125 6.66056 13.125 5.625C13.125 4.58947 13.9644 3.75 15 3.75C16.0356 3.75 16.875 4.58947 16.875 5.625Z" fill="#484848" />
      <path d="M10.6248 25.625V21.25H11.8748V25.625C11.8748 25.9702 12.1546 26.25 12.4998 26.25H12.5539C12.8772 26.25 13.1471 26.0035 13.1764 25.6816L13.5793 21.25H14.8344L14.4213 25.7947C14.418 25.8305 14.4138 25.866 14.4086 25.9011C14.3972 25.9779 14.3812 26.0532 14.3609 26.1266C14.14 26.9249 13.4092 27.5 12.5539 27.5H12.4998C11.4642 27.5 10.6248 26.6606 10.6248 25.625Z" fill="#484848" />
      <path d="M16.8231 25.6816L16.4202 21.25H15.165L15.5782 25.7947C15.5815 25.8305 15.5857 25.866 15.5909 25.9011C15.6023 25.9779 15.6183 26.0532 15.6386 26.1266C15.8595 26.9249 16.5903 27.5 17.4455 27.5H17.4998C18.5353 27.5 19.3748 26.6606 19.3748 25.625V21.25H18.1248V25.625C18.1248 25.9702 17.8449 26.25 17.4998 26.25H17.4455C17.1223 26.25 16.8524 26.0035 16.8231 25.6816Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6.875 9.375C6.52981 9.375 6.25 9.65481 6.25 10V19.375C6.25 19.7202 6.52981 20 6.875 20H23.125C23.4702 20 23.75 19.7202 23.75 19.375V10C23.75 9.65481 23.4702 9.375 23.125 9.375H6.875ZM7.5 10.625V18.75H12.1875C12.1875 18.4015 12.3494 18.0982 12.5172 17.8754C12.6929 17.6422 12.9247 17.4302 13.1746 17.251C13.5157 17.0064 13.9366 16.7906 14.375 16.6674V15.3125H13.875C13.4983 15.3125 12.9709 15.5401 12.4646 15.847C12.2274 15.9907 12.0211 16.1354 11.874 16.2444C11.8007 16.2986 11.743 16.3434 11.7044 16.374C11.6851 16.3893 11.6706 16.4009 11.6614 16.4084L11.6516 16.4164L11.6499 16.4178C11.6499 16.4178 11.6501 16.4176 11.25 15.9375C10.8499 15.4574 10.8501 15.4572 10.8501 15.4572L10.8509 15.4566L10.8524 15.4553L10.8571 15.4514L10.8729 15.4385C10.8862 15.4277 10.905 15.4125 10.9289 15.3936C10.9767 15.3558 11.0449 15.3029 11.1299 15.2399C11.2992 15.1146 11.5382 14.9468 11.8167 14.778C12.3416 14.4599 13.1267 14.0625 13.875 14.0625H14.375V12.8125H14.0625C13.7068 12.8125 13.2443 12.937 12.8307 13.0874C12.6325 13.1595 12.4606 13.2318 12.3388 13.286C12.2781 13.3129 12.2303 13.3352 12.1985 13.3503C12.1826 13.3578 12.1708 13.3636 12.1633 13.3672L12.1554 13.3711L12.1544 13.3716C12.1544 13.3716 12.1545 13.3715 11.875 12.8125C11.5955 12.2535 11.5957 12.2534 11.5957 12.2534L11.5978 12.2524L11.6018 12.2504L11.6153 12.2438C11.6266 12.2383 11.6424 12.2306 11.6626 12.221C11.7028 12.2019 11.76 12.1753 11.8311 12.1437C11.9729 12.0807 12.1722 11.9967 12.4036 11.9126C12.8494 11.7505 13.4807 11.5625 14.0625 11.5625H14.375V10.625H7.5ZM15.625 15.3125H16.3125C16.7806 15.3125 17.2616 15.5414 17.6644 15.8241C17.8584 15.9602 18.0178 16.0973 18.128 16.1998C18.1828 16.2508 18.2246 16.2924 18.2516 16.3201C18.2651 16.3339 18.2748 16.3442 18.2805 16.3503L18.2859 16.3561C18.2859 16.3561 18.2854 16.3556 18.75 15.9375C19.2146 15.5194 19.2143 15.5191 19.2143 15.5191L19.2134 15.5181L19.2118 15.5164L19.2074 15.5115L19.1936 15.4966C19.1822 15.4844 19.1664 15.4678 19.1466 15.4475C19.1069 15.4068 19.0506 15.3508 18.9794 15.2846C18.8377 15.1527 18.6337 14.9773 18.3824 14.8009C17.8946 14.4586 17.1569 14.0625 16.3125 14.0625H15.625V12.8125H16.0938C16.5277 12.8125 16.9496 12.9382 17.277 13.076C17.4377 13.1437 17.5682 13.2111 17.6568 13.2606C17.7009 13.2852 17.7342 13.3051 17.755 13.3179C17.7654 13.3243 17.7727 13.3289 17.7767 13.3315L17.7786 13.3327C17.7786 13.3327 17.7783 13.3326 18.125 12.8125C18.4717 12.2924 18.4714 12.2923 18.4714 12.2923L18.4704 12.2916L18.4688 12.2906L18.4645 12.2878L18.4517 12.2795C18.4414 12.2729 18.4275 12.2641 18.4101 12.2534C18.3754 12.232 18.3269 12.2031 18.266 12.1691C18.1447 12.1014 17.9724 12.0126 17.7621 11.924C17.3473 11.7493 16.7536 11.5625 16.0938 11.5625H15.625V10.625H22.5V18.75H17.8125C17.8125 18.3987 17.6453 18.0907 17.4776 17.8672C17.3002 17.6307 17.0659 17.4129 16.8129 17.2289C16.4797 16.9866 16.0618 16.7661 15.625 16.6494V15.3125ZM16.5581 18.75C16.5498 18.7294 16.5286 18.6853 16.4776 18.6172C16.3912 18.5021 16.2544 18.3684 16.0777 18.2398C15.7174 17.9778 15.3086 17.8198 15.02 17.8127C14.6798 17.8415 14.2533 18.0157 13.9031 18.2669C13.7286 18.392 13.5972 18.5192 13.5157 18.6274C13.4685 18.6902 13.449 18.7309 13.4414 18.75H16.5581Z" fill="#484848" />
    </svg>

  )
}

export function HistoryClinicIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.625 4.375C10.625 3.33947 11.4644 2.5 12.5 2.5H17.5C18.5356 2.5 19.375 3.33947 19.375 4.375H21.25C22.2856 4.375 23.125 5.21447 23.125 6.25V16.25H21.875V6.25C21.875 5.90482 21.5952 5.625 21.25 5.625H19.375C19.375 6.66056 18.5356 7.5 17.5 7.5H12.5C11.4644 7.5 10.625 6.66056 10.625 5.625H8.75C8.40481 5.625 8.125 5.90482 8.125 6.25V23.75C8.125 24.0952 8.40481 24.375 8.75 24.375H15V25.625H8.75C7.71444 25.625 6.875 24.7856 6.875 23.75V6.25C6.875 5.21447 7.71444 4.375 8.75 4.375H10.625ZM12.5 3.75C12.1548 3.75 11.875 4.02982 11.875 4.375V5.625C11.875 5.97018 12.1548 6.25 12.5 6.25H17.5C17.8452 6.25 18.125 5.97018 18.125 5.625V4.375C18.125 4.02982 17.8452 3.75 17.5 3.75H12.5ZM14.375 10V11.875H12.5V13.125H14.375V15H15.625V13.125H17.5V11.875H15.625V10H14.375ZM15 18.5406V21.0406C15 21.3858 15.2798 21.6656 15.625 21.6656H18.125V20.4156H17.2029L17.9863 19.6795C17.9911 19.675 17.9957 19.6704 18.0004 19.6659C18.3736 19.2925 18.8352 19.0197 19.3423 18.8731C19.8494 18.7264 20.3854 18.7106 20.9002 18.8271C21.4151 18.9436 21.8921 19.1886 22.2867 19.5392C22.6812 19.8899 22.9805 20.3349 23.1566 20.8325L24.335 20.4155C24.0884 19.7188 23.6694 19.0959 23.1171 18.6049C22.5647 18.114 21.8969 17.7709 21.1761 17.6079C20.4553 17.4447 19.7049 17.4669 18.995 17.6723C18.2883 17.8767 17.6446 18.256 17.1234 18.775L16.25 19.5958V18.5406H15ZM22.2917 22.0825H24.7917C25.1369 22.0825 25.4167 22.3623 25.4167 22.7075V25.2075H24.1667V24.1522L23.2931 24.9731C22.772 25.4921 22.1283 25.8713 21.4216 26.0757C20.7117 26.2811 19.9613 26.3032 19.2405 26.1402C18.5197 25.9771 17.8519 25.6341 17.2996 25.1431C16.7472 24.6521 16.3281 24.0292 16.0816 23.3325L17.26 22.9155C17.4361 23.4132 17.7354 23.8581 18.1299 24.2088C18.5245 24.5594 19.0015 24.8045 19.5164 24.921C20.0312 25.0375 20.5672 25.0216 21.0743 24.875C21.5814 24.7283 22.0431 24.4556 22.4162 24.0822C22.4209 24.0776 22.4256 24.073 22.4303 24.0686L23.2136 23.3325H22.2917V22.0825Z" fill="#484848" />
    </svg>

  )
}

export function EstudioPatientIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.625 13.4375L14.6875 16.5625L15.625 17.8125L16.5625 16.5625L15.625 13.4375Z" fill="#484848" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21.2506 11.0206C21.1739 10.9821 21.0874 10.9374 20.9933 10.8868C20.6224 10.6876 20.1241 10.3926 19.6221 10.0116C18.6576 9.27937 17.5 8.09256 17.5 6.53019C17.5 5.13896 18.5526 3.75 20.1172 3.75C20.8438 3.75 21.4321 4.03977 21.875 4.47284C22.3179 4.03978 22.9062 3.75 23.6328 3.75C25.1976 3.75 26.25 5.13921 26.25 6.53019C26.25 8.04425 25.0866 9.23206 24.1322 9.96962C23.6322 10.356 23.1359 10.6601 22.7664 10.8671C22.6687 10.9218 22.5794 10.9699 22.5006 11.0114C22.5042 12.1012 22.5218 13.1418 22.5386 14.1269C22.5752 16.2862 22.6074 18.1795 22.4763 19.7426C22.2778 22.1102 21.6905 24.0103 19.9359 25.0379C18.2097 26.0491 15.6598 26.429 13.5481 26.1721C12.4881 26.0432 11.4762 25.747 10.7111 25.2359C10.1536 24.8636 9.71219 24.3633 9.5045 23.7352C8.20606 23.6761 6.91519 23.4392 5.89345 23.0156C4.79077 22.5584 3.75 21.7654 3.75 20.5247V8.20131H3.75183C3.75061 8.17594 3.75 8.1505 3.75 8.125C3.75 6.39913 6.54825 5 10 5C13.4517 5 16.25 6.39913 16.25 8.125C16.25 8.1505 16.2494 8.17594 16.2482 8.20131H16.25V11.9193C18.3702 12.2226 20 14.0459 20 16.25C20 18.4543 18.3699 20.2778 16.2494 20.5808C16.2203 21.8401 15.2135 22.6373 14.1028 23.0893C13.1849 23.4629 12.0534 23.6696 10.8967 23.7307C11.0218 23.8983 11.1909 24.0532 11.4054 24.1964C11.9496 24.5599 12.7496 24.8158 13.699 24.9312C15.6063 25.1632 17.8664 24.8014 19.3041 23.9594C20.4988 23.2596 21.039 21.9247 21.2307 19.6382C21.3566 18.1366 21.3259 16.3494 21.2897 14.2394C21.2726 13.2402 21.2542 12.1685 21.2506 11.0206ZM20.1172 5C19.379 5 18.75 5.68491 18.75 6.53019C18.75 7.46413 19.4674 8.32475 20.3779 9.01594C20.8134 9.3465 21.2526 9.60719 21.5848 9.78562C21.6925 9.8435 21.7882 9.89231 21.8678 9.93163C21.9486 9.88981 22.0459 9.83787 22.1555 9.77644C22.4891 9.58962 22.9303 9.31875 23.3678 8.98063C24.2884 8.26913 25 7.4095 25 6.53019C25 5.68503 24.3711 5 23.6328 5C23.1182 5 22.7083 5.2863 22.4216 5.80329L21.875 6.789L21.3284 5.8033C21.0417 5.28627 20.6318 5 20.1172 5ZM10 11.25C12.0445 11.25 13.8597 10.7592 15 10.0003V11.9193C12.8798 12.2226 11.25 14.0459 11.25 16.25C11.25 18.4535 12.879 20.2765 14.9984 20.5804C14.9708 21.0669 14.5777 21.5465 13.6316 21.9316C12.6787 22.3194 11.3619 22.5147 10.0071 22.4992C9.81437 22.4971 9.62231 22.4906 9.43181 22.48V11.2373C9.61894 11.2457 9.8085 11.25 10 11.25ZM15 8.125C15 8.25944 14.8586 8.71763 13.8604 9.21669C12.937 9.67838 11.5739 10 10 10C8.42606 10 7.063 9.67838 6.1396 9.21669C5.14145 8.71763 5 8.25944 5 8.125C5 7.99056 5.14145 7.53237 6.1396 7.03331C7.063 6.57162 8.42606 6.25 10 6.25C11.5739 6.25 12.937 6.57162 13.8604 7.03331C14.8586 7.53237 15 7.99056 15 8.125ZM15.625 19.375C17.3509 19.375 18.75 17.9759 18.75 16.25C18.75 14.5241 17.3509 13.125 15.625 13.125C13.8991 13.125 12.5 14.5241 12.5 16.25C12.5 17.9759 13.8991 19.375 15.625 19.375Z" fill="#484848" />
    </svg>

  )
}

export function EstudioIconTwo({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3578 5.18851L13.2893 4.65853L13.9022 5.72013C14.7302 5.44905 15.6654 5.78315 16.1201 6.56503L18.9468 11.4255C19.4673 12.3207 19.161 13.4638 18.2626 13.9788L17.7323 14.2828L18.1555 15.1007L16.4843 15.9521L16.1036 15.2163L15.6866 15.4553C14.7882 15.9702 13.6379 15.662 13.1173 14.7668L11.2912 11.6268C9.68938 12.5481 8.58475 13.5768 7.99225 14.7533C7.49356 15.7434 7.32963 16.8945 7.6055 18.2765C8.50056 17.7817 9.52987 17.5 10.625 17.5C12.6686 17.5 14.4831 18.4808 15.6234 19.9973L23.1772 15.7404L23.7978 16.8255L16.2714 21.0669C16.6584 21.8799 16.875 22.7897 16.875 23.75C16.875 24.1781 16.8319 24.5962 16.75 25H25C25.3452 25 25.625 25.2798 25.625 25.625C25.625 25.9702 25.3452 26.25 25 26.25H4.89506C4.56056 25.4845 4.375 24.6389 4.375 23.75C4.375 21.8779 5.19813 20.198 6.50225 19.0525C6.02637 17.2229 6.16157 15.6093 6.87581 14.191C7.61662 12.7201 8.942 11.5368 10.6628 10.5462L10.2906 9.90628C9.89062 9.21853 9.97881 8.38435 10.4486 7.80122L9.78531 6.65228L10.728 6.11592L9.95225 4.72378L11.596 3.82129L12.3578 5.18851ZM17.8622 12.0472L15.0356 7.1866C14.8621 6.88822 14.4786 6.78547 14.1791 6.95716L11.6032 8.43366C11.3037 8.60528 11.2016 8.98635 11.3751 9.28472L14.2018 14.1452C14.3753 14.4437 14.7587 14.5464 15.0583 14.3747L17.6342 12.8982C17.9337 12.7266 18.0357 12.3455 17.8622 12.0472ZM15.4678 25C15.5703 24.6013 15.625 24.1827 15.625 23.75C15.625 23.0127 15.4654 22.3127 15.1789 21.6826L12.1764 23.3747L11.5559 22.2895L14.5225 20.6177C13.6061 19.4788 12.2006 18.75 10.625 18.75C7.86356 18.75 5.625 20.9886 5.625 23.75C5.625 24.1827 5.67967 24.6013 5.78221 25H15.4678Z" fill="#484848" />
    </svg>

  )
}

export function ConfigurationIconSideMenu({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.43744 0H14.5202V1.03984C14.6118 2.04296 14.7521 2.79654 14.9503 3.34297C15.1491 3.89116 15.3841 4.17172 15.6272 4.31485C15.8688 4.4571 16.2222 4.52472 16.7879 4.4276C17.3534 4.33047 18.0706 4.07841 18.9817 3.65497L19.9162 3.11541L22.9576 8.38322L22.2034 8.81866C21.3384 9.42054 20.7249 9.9356 20.3301 10.3952C19.9339 10.8565 19.802 11.2101 19.7992 11.4988C19.7964 11.7854 19.9197 12.1346 20.3061 12.5904C20.6923 13.0459 21.2989 13.5571 22.1624 14.155L22.9576 14.614L22.6333 15.1758L19.9162 19.8819L18.9409 19.3187C18.013 18.8961 17.2919 18.6534 16.7302 18.5716C16.1724 18.4904 15.8334 18.5755 15.6004 18.7368C15.3566 18.9055 15.1207 19.2318 14.9287 19.8531C14.7371 20.473 14.6106 21.3175 14.5351 22.4297L14.5202 22.4297V22.9973H8.43744V21.6994C8.33844 20.7365 8.18976 20.0257 7.98601 19.5199C7.78319 19.0166 7.54794 18.769 7.30182 18.6463C7.04757 18.5195 6.67182 18.471 6.07957 18.5924C5.49126 18.713 4.75276 18.9884 3.82351 19.4303L3.04138 19.8819L0 14.614L1.13883 13.9565C1.89844 13.4062 2.43161 12.9328 2.77094 12.5105C3.11076 12.0877 3.22182 11.7599 3.21951 11.4879C3.21719 11.2149 3.09988 10.8846 2.74994 10.4592C2.40067 10.0345 1.85495 9.55873 1.07912 9.00623L0 8.38322L3.04138 3.11541L3.69638 3.4936C4.64713 3.9476 5.40626 4.23579 6.01369 4.36741C6.62663 4.50023 7.01938 4.45929 7.28494 4.33572C7.53807 4.21804 7.77632 3.9781 7.98126 3.48498C8.18819 2.98723 8.33907 2.28193 8.43744 1.3195V0ZM3.51138 18.196C4.38263 17.7931 5.15257 17.5064 5.82857 17.3679C6.56863 17.2162 7.26026 17.2289 7.85957 17.5276C8.46694 17.8304 8.87132 18.3725 9.14544 19.0528C9.41632 19.7252 9.58082 20.5821 9.68426 21.6047L9.68744 21.6361V21.7473H13.3354C13.4171 20.8622 13.5423 20.1059 13.7344 19.484C13.9681 18.728 14.3222 18.1012 14.8891 17.7089C15.4669 17.309 16.1594 17.2252 16.9104 17.3347C17.6441 17.4415 18.49 17.74 19.4556 18.1797L21.2622 15.0506C20.4539 14.4785 19.8083 13.9362 19.3526 13.3987C18.8552 12.8119 18.5424 12.181 18.5493 11.4865C18.556 10.7942 18.8794 10.1658 19.3819 9.58072C19.8363 9.05179 20.4727 8.51629 21.2646 7.95098L19.4535 4.81398C18.5263 5.24179 17.7109 5.53735 16.9995 5.65954C16.2625 5.78616 15.5776 5.73629 14.9929 5.39197C14.4097 5.04854 14.0306 4.47347 13.7752 3.76916C13.5311 3.09616 13.3802 2.25178 13.2844 1.25H9.68744V1.3824L9.68432 1.41356C9.58144 2.43766 9.41413 3.29466 9.13551 3.96485C8.85276 4.64504 8.43457 5.1796 7.81219 5.4691C7.20226 5.75285 6.50038 5.75191 5.74894 5.5891C5.09488 5.44735 4.35332 5.17204 3.51788 4.79004L1.70753 7.92566L1.75507 7.95316L1.77896 7.9701C2.60331 8.55523 3.25976 9.11116 3.71538 9.66516C4.17401 10.2228 4.46394 10.8214 4.46951 11.4772C4.47507 12.1339 4.19463 12.7345 3.74532 13.2935C3.29938 13.8484 2.65409 14.4043 1.84496 14.9885L1.81916 15.0072L1.70753 15.0716L3.51138 18.196Z" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.479 13.3733C12.5146 13.3733 13.354 12.5339 13.354 11.4983C13.354 10.4628 12.5146 9.62329 11.479 9.62329C10.4434 9.62329 9.604 10.4628 9.604 11.4983C9.604 12.5339 10.4434 13.3733 11.479 13.3733ZM11.479 14.6233C13.2049 14.6233 14.604 13.2242 14.604 11.4983C14.604 9.77242 13.2049 8.37329 11.479 8.37329C9.75313 8.37329 8.354 9.77242 8.354 11.4983C8.354 13.2242 9.75313 14.6233 11.479 14.6233Z" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.479 15.8733C13.8953 15.8733 15.854 13.9145 15.854 11.4983C15.854 9.08204 13.8953 7.12329 11.479 7.12329C9.06275 7.12329 7.104 9.08204 7.104 11.4983C7.104 13.9145 9.06275 15.8733 11.479 15.8733ZM11.479 17.1233C14.5856 17.1233 17.104 14.6049 17.104 11.4983C17.104 8.39173 14.5856 5.87329 11.479 5.87329C8.37238 5.87329 5.854 8.39173 5.854 11.4983C5.854 14.6049 8.37238 17.1233 11.479 17.1233Z" fill="black" />
    </svg>
  )
}

// Citas Medico con el paciente

export function AdressIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1040_3209)">
        <path d="M11.5 5.35707C11.5 8.57136 7 12.3214 7 12.3214C7 12.3214 2.5 8.57136 2.5 5.35707C2.5 2.731 4.549 0.535645 7 0.535645C9.451 0.535645 11.5 2.731 11.5 5.35707Z" stroke="#948ABC" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 6.96429C7.82843 6.96429 8.5 6.24475 8.5 5.35714C8.5 4.46954 7.82843 3.75 7 3.75C6.17157 3.75 5.5 4.46954 5.5 5.35714C5.5 6.24475 6.17157 6.96429 7 6.96429Z" stroke="#948ABC" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.0773 10.7141H12L13.5 14.4641H0.5L2 10.7141H2.9227" stroke="#948ABC" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1040_3209">
          <rect width="14" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export function SilderIcon({ width, height }: IconProps) {
  return (

    <svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_736_3842)">
        <path d="M8.75001 1.66699H5.83334" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.16667 1.66699H1.25" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.75 5H5" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33333 5H1.25" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8.74999 8.33301H6.66666" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 8.33301H1.25" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.83334 0.833008V2.49967" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33334 4.16699V5.83366" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.66666 7.5V9.16667" stroke="#767676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_736_3842">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}


export function CoraBotIcon() {
  return (
    <svg width="160" height="174" viewBox="0 0 160 174" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1129_5382)">
        <rect x="59" y="42" width="64" height="56" rx="16" fill="white" />
      </g>
      <mask id="path-2-outside-1_1129_5382" maskUnits="userSpaceOnUse" x="76" y="52" width="27" height="34" fill="black">
        <rect fill="white" x="76" y="52" width="27" height="34" />
        <path d="M93.5838 79.44C95.0558 79.44 96.3038 79.312 97.3278 79.056C98.3518 78.8 99.2318 78.448 99.9678 78L101.312 82.8C100.544 83.248 99.4558 83.648 98.0478 84C96.6398 84.352 94.9278 84.528 92.9118 84.528C90.6398 84.528 88.5438 84.176 86.6238 83.472C84.7038 82.736 83.0398 81.696 81.6318 80.352C80.2558 78.976 79.1838 77.328 78.4158 75.408C77.6478 73.456 77.2638 71.264 77.2638 68.832C77.2638 66.464 77.6318 64.32 78.3678 62.4C79.1358 60.48 80.1918 58.848 81.5358 57.504C82.9118 56.128 84.5758 55.072 86.5278 54.336C88.4798 53.6 90.6558 53.232 93.0558 53.232C95.1038 53.232 96.7838 53.424 98.0958 53.808C99.4398 54.192 100.528 54.608 101.36 55.056L99.8718 59.904C99.0398 59.456 98.1118 59.088 97.0878 58.8C96.0958 58.48 94.9758 58.32 93.7278 58.32C92.4158 58.32 91.1838 58.512 90.0318 58.896C88.8798 59.28 87.8718 59.904 87.0078 60.768C86.1438 61.6 85.4558 62.688 84.9438 64.032C84.4638 65.344 84.2238 66.944 84.2238 68.832C84.2238 70.656 84.4638 72.24 84.9438 73.584C85.4238 74.896 86.0798 75.984 86.9118 76.848C87.7758 77.712 88.7678 78.368 89.8878 78.816C91.0398 79.232 92.2718 79.44 93.5838 79.44Z" />
      </mask>
      <path d="M93.5838 79.44C95.0558 79.44 96.3038 79.312 97.3278 79.056C98.3518 78.8 99.2318 78.448 99.9678 78L101.312 82.8C100.544 83.248 99.4558 83.648 98.0478 84C96.6398 84.352 94.9278 84.528 92.9118 84.528C90.6398 84.528 88.5438 84.176 86.6238 83.472C84.7038 82.736 83.0398 81.696 81.6318 80.352C80.2558 78.976 79.1838 77.328 78.4158 75.408C77.6478 73.456 77.2638 71.264 77.2638 68.832C77.2638 66.464 77.6318 64.32 78.3678 62.4C79.1358 60.48 80.1918 58.848 81.5358 57.504C82.9118 56.128 84.5758 55.072 86.5278 54.336C88.4798 53.6 90.6558 53.232 93.0558 53.232C95.1038 53.232 96.7838 53.424 98.0958 53.808C99.4398 54.192 100.528 54.608 101.36 55.056L99.8718 59.904C99.0398 59.456 98.1118 59.088 97.0878 58.8C96.0958 58.48 94.9758 58.32 93.7278 58.32C92.4158 58.32 91.1838 58.512 90.0318 58.896C88.8798 59.28 87.8718 59.904 87.0078 60.768C86.1438 61.6 85.4558 62.688 84.9438 64.032C84.4638 65.344 84.2238 66.944 84.2238 68.832C84.2238 70.656 84.4638 72.24 84.9438 73.584C85.4238 74.896 86.0798 75.984 86.9118 76.848C87.7758 77.712 88.7678 78.368 89.8878 78.816C91.0398 79.232 92.2718 79.44 93.5838 79.44Z" fill="#948ABC" />
      <path d="M97.3278 79.056L97.5703 80.0261L97.3278 79.056ZM99.9678 78L100.931 77.7304L100.575 76.4597L99.4478 77.1458L99.9678 78ZM101.312 82.8L101.816 83.6638L102.483 83.2744L102.275 82.5304L101.312 82.8ZM86.6238 83.472L86.2658 84.4057L86.2726 84.4084L86.2795 84.4109L86.6238 83.472ZM81.6318 80.352L80.9246 81.0591L80.9329 81.0673L80.9413 81.0754L81.6318 80.352ZM78.4158 75.408L77.4852 75.7741L77.4873 75.7794L78.4158 75.408ZM78.3678 62.4L77.4393 62.0286L77.4366 62.0353L77.434 62.0421L78.3678 62.4ZM81.5358 57.504L80.8286 56.7969V56.7969L81.5358 57.504ZM86.5278 54.336L86.8806 55.2717L86.5278 54.336ZM98.0958 53.808L97.8148 54.7678L97.821 54.7695L98.0958 53.808ZM101.36 55.056L102.316 55.3494L102.557 54.5647L101.834 54.1755L101.36 55.056ZM99.8717 59.904L99.3977 60.7845L100.47 61.362L100.828 60.1974L99.8717 59.904ZM97.0877 58.8L96.7807 59.7517L96.7988 59.7575L96.817 59.7626L97.0877 58.8ZM90.0318 58.896L90.348 59.8447L90.348 59.8447L90.0318 58.896ZM87.0078 60.768L87.7014 61.4883L87.7082 61.4818L87.7149 61.4751L87.0078 60.768ZM84.9438 64.032L84.0092 63.676L84.0046 63.6884L84.9438 64.032ZM84.9438 73.584L84.002 73.9203L84.0046 73.9276L84.9438 73.584ZM86.9118 76.848L86.1914 77.5416L86.198 77.5484L86.2046 77.5551L86.9118 76.848ZM89.8878 78.816L89.5164 79.7445L89.5321 79.7508L89.5481 79.7566L89.8878 78.816ZM93.5838 80.44C95.108 80.44 96.4427 80.308 97.5703 80.0261L97.0852 78.0859C96.1648 78.316 95.0035 78.44 93.5838 78.44V80.44ZM97.5703 80.0261C98.6709 79.751 99.6488 79.3648 100.488 78.8542L99.4478 77.1458C98.8147 77.5312 98.0326 77.849 97.0852 78.0859L97.5703 80.0261ZM99.0048 78.2696L100.349 83.0696L102.275 82.5304L100.931 77.7304L99.0048 78.2696ZM100.808 81.9362C100.157 82.3162 99.1716 82.6883 97.8052 83.0299L98.2903 84.9701C99.7399 84.6077 100.931 84.1798 101.816 83.6638L100.808 81.9362ZM97.8052 83.0299C96.5005 83.356 94.8751 83.528 92.9118 83.528V85.528C94.9804 85.528 96.779 85.348 98.2903 84.9701L97.8052 83.0299ZM92.9118 83.528C90.7442 83.528 88.7662 83.1925 86.968 82.5331L86.2795 84.4109C88.3213 85.1595 90.5353 85.528 92.9118 85.528V83.528ZM86.9817 82.5383C85.1783 81.847 83.6291 80.8761 82.3222 79.6286L80.9413 81.0754C82.4504 82.5159 84.2292 83.625 86.2658 84.4057L86.9817 82.5383ZM82.3389 79.6449C81.0645 78.3706 80.0651 76.8389 79.3442 75.0366L77.4873 75.7794C78.3024 77.8171 79.447 79.5814 80.9246 81.0591L82.3389 79.6449ZM79.3463 75.0419C78.6309 73.2235 78.2638 71.1584 78.2638 68.832H76.2638C76.2638 71.3696 76.6646 73.6885 77.4852 75.7741L79.3463 75.0419ZM78.2638 68.832C78.2638 66.5681 78.6154 64.5477 79.3015 62.7579L77.434 62.0421C76.6481 64.0922 76.2638 66.3599 76.2638 68.832H78.2638ZM79.2962 62.7714C80.0184 60.966 81.0028 59.4512 82.2429 58.2111L80.8286 56.7969C79.3807 58.2448 78.2531 59.994 77.4393 62.0286L79.2962 62.7714ZM82.2429 58.2111C83.5112 56.9427 85.0518 55.9612 86.8806 55.2717L86.1749 53.4003C84.0997 54.1828 82.3123 55.3133 80.8286 56.7969L82.2429 58.2111ZM86.8806 55.2717C88.7042 54.5841 90.7584 54.232 93.0558 54.232V52.232C90.5531 52.232 88.2553 52.6159 86.1749 53.4003L86.8806 55.2717ZM93.0558 54.232C95.051 54.232 96.6273 54.4202 97.8149 54.7677L98.3767 52.8483C96.9402 52.4278 95.1565 52.232 93.0558 52.232V54.232ZM97.821 54.7695C99.1254 55.1422 100.139 55.5346 100.886 55.9365L101.834 54.1755C100.916 53.6814 99.7541 53.2418 98.3705 52.8465L97.821 54.7695ZM100.404 54.7626L98.9158 59.6106L100.828 60.1974L102.316 55.3494L100.404 54.7626ZM100.346 59.0235C99.4418 58.5367 98.4444 58.1428 97.3585 57.8373L96.817 59.7626C97.7791 60.0332 98.6377 60.3753 99.3977 60.7845L100.346 59.0235ZM97.3948 57.8483C96.2862 57.4907 95.0601 57.32 93.7278 57.32V59.32C94.8914 59.32 95.9053 59.4693 96.7807 59.7517L97.3948 57.8483ZM93.7278 57.32C92.3169 57.32 90.9774 57.5267 89.7155 57.9473L90.348 59.8447C91.3901 59.4973 92.5146 59.32 93.7278 59.32V57.32ZM89.7155 57.9473C88.4153 58.3807 87.2737 59.0878 86.3006 60.0609L87.7149 61.4751C88.4698 60.7202 89.3442 60.1793 90.348 59.8447L89.7155 57.9473ZM86.3141 60.0477C85.3249 61.0002 84.5634 62.2213 84.0093 63.676L85.8782 64.388C86.3481 63.1547 86.9626 62.1998 87.7014 61.4883L86.3141 60.0477ZM84.0046 63.6884C83.473 65.1416 83.2238 66.8653 83.2238 68.832H85.2238C85.2238 67.0227 85.4545 65.5464 85.8829 64.3756L84.0046 63.6884ZM83.2238 68.832C83.2238 70.7403 83.4744 72.4431 84.002 73.9203L85.8855 73.2477C85.4531 72.0369 85.2238 70.5717 85.2238 68.832H83.2238ZM84.0046 73.9276C84.5246 75.3489 85.2483 76.5623 86.1914 77.5416L87.6321 76.1544C86.9112 75.4057 86.3229 74.4431 85.8829 73.2404L84.0046 73.9276ZM86.2046 77.5551C87.1631 78.5136 88.269 79.2455 89.5164 79.7445L90.2591 77.8875C89.2665 77.4905 88.3884 76.9104 87.6189 76.1409L86.2046 77.5551ZM89.5481 79.7566C90.8166 80.2146 92.1642 80.44 93.5838 80.44V78.44C92.3793 78.44 91.2629 78.2494 90.2274 77.8754L89.5481 79.7566Z" fill="#948ABC" mask="url(#path-2-outside-1_1129_5382)" />
      <defs>
        <filter id="filter0_d_1129_5382" x="0" y="0" width="182" height="174" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="11" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1129_5382" />
          <feOffset dy="17" />
          <feGaussianBlur stdDeviation="35" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1129_5382" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1129_5382" result="shape" />
        </filter>
      </defs>
    </svg>


  )
}



export function LupitaIconTwo({ width, height }: IconProps) {
  return (
    <svg

      fill="none"
      stroke="currentColor"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  )
}

export function DonationRegistreIcon({width, height}: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 16.5V14.8333C13.3333 13.9493 12.9821 13.1014 12.357 12.4763C11.7319 11.8512 10.8841 11.5 10 11.5H4.16667C3.28261 11.5 2.43477 11.8512 1.80965 12.4763C1.18453 13.1014 0.833336 13.9493 0.833336 14.8333V16.5M16.6667 5.66667V10.6667M19.1667 8.16667H14.1667M10.4167 4.83333C10.4167 6.67428 8.92428 8.16667 7.08334 8.16667C5.24239 8.16667 3.75 6.67428 3.75 4.83333C3.75 2.99238 5.24239 1.5 7.08334 1.5C8.92428 1.5 10.4167 2.99238 10.4167 4.83333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}