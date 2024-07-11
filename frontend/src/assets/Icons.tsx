interface IconProps {
    width: number
    height: number
}


export const IconCorreo = ({ width, height }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75 3.75C13.75 3.0625 13.1875 2.5 12.5 2.5H2.5C1.8125 2.5 1.25 3.0625 1.25 3.75M13.75 3.75V11.25C13.75 11.9375 13.1875 12.5 12.5 12.5H2.5C1.8125 12.5 1.25 11.9375 1.25 11.25V3.75M13.75 3.75L7.5 8.125L1.25 3.75" stroke="#948ABC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}


export const IconPassword = ({ width, height }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_39_11424)">
                <path d="M4.375 6.875V4.375C4.375 3.5462 4.70424 2.75134 5.29029 2.16529C5.87634 1.57924 6.6712 1.25 7.5 1.25C8.3288 1.25 9.12366 1.57924 9.70971 2.16529C10.2958 2.75134 10.625 3.5462 10.625 4.375V6.875M3.125 6.875H11.875C12.5654 6.875 13.125 7.43464 13.125 8.125V12.5C13.125 13.1904 12.5654 13.75 11.875 13.75H3.125C2.43464 13.75 1.875 13.1904 1.875 12.5V8.125C1.875 7.43464 2.43464 6.875 3.125 6.875Z" stroke="#948ABC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_39_11424">
                    <rect width="15" height="15" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}