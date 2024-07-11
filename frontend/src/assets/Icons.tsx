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


export function ClosePassword({ width, height }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_39_11059)">
                <path d="M8.825 8.825C8.65334 9.00922 8.44634 9.15697 8.21635 9.25945C7.98635 9.36193 7.73806 9.41704 7.48631 9.42148C7.23455 9.42592 6.98448 9.37961 6.75101 9.28531C6.51754 9.191 6.30545 9.05064 6.1274 8.8726C5.94936 8.69455 5.809 8.48246 5.71469 8.24899C5.62039 8.01552 5.57408 7.76545 5.57852 7.51369C5.58296 7.26194 5.63807 7.01365 5.74055 6.78365C5.84303 6.55366 5.99078 6.34666 6.175 6.175M0.625 0.625L14.375 14.375M11.2125 11.2125C10.1441 12.0269 8.84319 12.478 7.5 12.5C3.125 12.5 0.625 7.5 0.625 7.5C1.40243 6.05118 2.48071 4.78538 3.7875 3.7875L11.2125 11.2125ZM6.1875 2.65C6.61771 2.5493 7.05817 2.49896 7.5 2.5C11.875 2.5 14.375 7.5 14.375 7.5C13.9956 8.20975 13.5432 8.87796 13.025 9.49375L6.1875 2.65Z" stroke="#948ABC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
            <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

