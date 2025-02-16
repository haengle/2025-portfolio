import AtxCutout from '../images/atx-removebg.png';

export default function Skyline() {

    const svgStyle = {
        maxWidth: '100%',
    }

    return (
        <>
        <svg style={svgStyle} width="1482" height="502" viewBox="0 0 1482 502" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>

            <path d="M274.5 500.5H1V1H1481V389.5L1461.5 416L1453 443H1359.5L1327 389.5L1302 381L1284 389.5V352.5V293.5L1268 264H1241.5L1219 286V381L1152.5 389.5V416H1142.5H1120L1107 434L1096.5 485.5H1022.5L1013.5 456H975.5V500.5L957.5 491.5L953 456H922V389.5L827.5 397V485.5H682.5V434L650 416L598.5 407.5L549.5 425L521.5 434V469.5H511V425L500.5 389.5V369L486 361.5H446V469.5H422.5V500.5H407.5V469.5V456L370.5 443L338 456V500.5H314.5V456L292.5 434L274.5 456V500.5Z" fill="url(#paint0_radial_1_3)" stroke="none"/>

            <image x="0" y="0" width="1482" height="502" href={AtxCutout} />

            <defs>
            <radialGradient id="paint0_radial_1_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(741 250.75) rotate(90) scale(249.75 740)">
            <stop stop-color="#79F4FC"/>
            <stop offset="0.484375" stop-color="#9AEBFD" stop-opacity="0.48"/>
            <stop offset="1" stop-color="#605DDF" stop-opacity="0.45"/>
            </radialGradient>
            </defs>
            </svg>
        </>
    )
}