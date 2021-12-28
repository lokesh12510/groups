import Logo from "../Assets/Images/logo.svg";
import StarterBg from "../Assets/Images/Start.svg";
import BottomSvg from "../Assets/Images/BottomSvg.svg";
import ThanksImg from "../Assets/Images/thanksImg.svg";
import { DefaultTheme } from "../Constant";

export const APP_LOGO = Logo;

export const STARTER_BG = StarterBg;

export const BOTTOM_SVG = BottomSvg;

export const THANKS_IMAGE = ThanksImg;

const primaryColor = DefaultTheme.palette.primary.main.slice(1);

export const PROFILE_BG = `data:image/svg+xml;charset=UTF-8,%3csvg width='414' height='280' viewBox='0 0 414 280' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_489_1358)'%3e%3cmask id='mask0_489_1358' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-13' y='-18' width='439' height='298'%3e%3cpath d='M397.191 -18H15.8094C-0.101603 -18 -13 -3.99099 -13 13.29V248.71C-13 265.991 -0.101603 280 15.8094 280H397.191C413.102 280 426 265.991 426 248.71V13.29C426 -3.99099 413.102 -18 397.191 -18Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_489_1358)'%3e%3cpath d='M397.191 -18H15.8094C-0.101603 -18 -13 -3.99099 -13 13.29V248.71C-13 265.991 -0.101603 280 15.8094 280H397.191C413.102 280 426 265.991 426 248.71V13.29C426 -3.99099 413.102 -18 397.191 -18Z' fill='%23${primaryColor}'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M-28.3804 292.479C12.4962 161.679 65.9655 74.3721 132.027 30.557C198.089 -13.2581 295.765 -31.1905 425.053 -23.2401V292.479H-28.3804Z' fill='url(%23paint0_linear_489_1358)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M72.0562 292.1C112.933 161.301 166.402 73.9938 232.464 30.1787C298.526 -13.6364 396.201 -31.5688 525.49 -23.6184V292.1H72.0562Z' fill='url(%23paint1_linear_489_1358)'/%3e%3cpath style='mix-blend-mode:multiply' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M-19.625 292.1C-16.4245 206.72 48.7658 179.183 175.946 209.491C303.126 239.799 389.595 153.829 435.354 -48.4171L446.888 292.1H-19.625Z' fill='url(%23paint2_linear_489_1358)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_489_1358' x1='437.226' y1='68.5697' x2='184.281' y2='366.462' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_489_1358' x1='537.662' y1='68.1914' x2='284.718' y2='366.084' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_489_1358' x1='459.412' y1='51.997' x2='186.575' y2='360.287' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_489_1358'%3e%3crect width='414' height='280' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;

export const DEFAULT_PROFILE = () => {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="white" />
      <path
        d="M60.5211 58.8587C69.549 58.8587 77.3957 50.743 77.3957 40.1758C77.3957 29.7353 69.549 22 60.5211 22C51.4932 22 43.6465 29.9043 43.6465 40.2603C43.6465 50.743 51.451 58.8587 60.5211 58.8587ZM33.9857 98H86.9721C93.6376 98 96 96.0979 96 92.3782C96 81.4727 82.3737 66.4249 60.4789 66.4249C38.6263 66.4249 25 81.4727 25 92.3782C25 96.0979 27.3624 98 33.9857 98Z"
        fill={`#${primaryColor}`}
      />
    </svg>
  );
};

export const BG_VARIANT_1 = `data:image/svg+xml;charset=UTF-8,%3csvg width='373' height='200' viewBox='0 0 373 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_487_1147' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='373' height='200'%3e%3cpath d='M348.522 0H24.4781C10.9592 0 0 9.40202 0 21V179C0 190.598 10.9592 200 24.4781 200H348.522C362.041 200 373 190.598 373 179V21C373 9.40202 362.041 0 348.522 0Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_487_1147)'%3e%3cpath d='M348.522 0H24.4781C10.9592 0 0 9.40202 0 21V179C0 190.598 10.9592 200 24.4781 200H348.522C362.041 200 373 190.598 373 179V21C373 9.40202 362.041 0 348.522 0Z' fill='%23F0F4F8'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M136.015 301.995L392.107 -41.788L-45.5704 192.174L136.015 301.995Z' fill='url(%23paint0_linear_487_1147)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M205.616 214.843L423.812 60.6418C406.493 37.3783 389.147 18.3216 371.771 3.47162C354.395 -11.3784 316.432 -30.6362 257.881 -54.3018L205.616 214.843Z' fill='url(%23paint1_linear_487_1147)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M419.733 229.774L302.234 -3.77069H-23.9923L419.733 229.774Z' fill='url(%23paint2_linear_487_1147)'/%3e%3cpath style='mix-blend-mode:multiply' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M-5.62915 208.121L390.747 12.614V208.121H-5.62915Z' fill='url(%23paint3_linear_487_1147)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_487_1147' x1='-57.3202' y1='59.5891' x2='219.861' y2='350.638' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_487_1147' x1='199.758' y1='25.0656' x2='400.535' y2='159.313' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_487_1147' x1='-35.9045' y1='65.0985' x2='135.078' y2='333.033' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_487_1147' x1='401.388' y1='70.2664' x2='262.352' y2='302.757' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e `;

export const BG_VARIANT_2 = `data:image/svg+xml;charset=UTF-8,%3csvg width='373' height='200' viewBox='0 0 373 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_574_300' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='373' height='200'%3e%3cpath d='M348.522 0H24.4781C10.9592 0 0 9.40202 0 21V179C0 190.598 10.9592 200 24.4781 200H348.522C362.041 200 373 190.598 373 179V21C373 9.40202 362.041 0 348.522 0Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_574_300)'%3e%3cpath d='M348.522 0H24.4781C10.9592 0 0 9.40202 0 21V179C0 190.598 10.9592 200 24.4781 200H348.522C362.041 200 373 190.598 373 179V21C373 9.40202 362.041 0 348.522 0Z' fill='%23${primaryColor}'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M92.0844 -29L480.813 232.391V-18.0948L92.0844 -29Z' fill='%23D8D8D8'/%3e%3c/g%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M399.099 -14.3005L-15.1532 202.723V-5.09478L399.099 -14.3005Z' fill='url(%23paint0_linear_574_300)'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M145.703 -29L534.432 232.391V-18.0948L145.703 -29Z' fill='%23D8D8D8'/%3e%3c/g%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M221.469 -29L610.197 232.391V-18.0948L221.469 -29Z' fill='%23D8D8D8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_574_300' x1='-26.2742' y1='138.726' x2='132.302' y2='-110.923' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e `;

export const BG_MINI_1 = `data:image/svg+xml;charset=UTF-8,%3csvg width='320' height='200' viewBox='0 0 320 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0_14_124' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='320' height='200'%3e%3cpath d='M299 0H21C9.40202 0 0 9.40202 0 21V179C0 190.598 9.40202 200 21 200H299C310.598 200 320 190.598 320 179V21C320 9.40202 310.598 0 299 0Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_14_124)'%3e%3cpath d='M299 0H21C9.40202 0 0 9.40202 0 21V179C0 190.598 9.40202 200 21 200H299C310.598 200 320 190.598 320 179V21C320 9.40202 310.598 0 299 0Z' fill='%23F2F2F2'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M116.689 301.995L336.392 -41.788L-39.0952 192.174L116.689 301.995Z' fill='url(%23paint0_linear_14_124)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M176.399 214.843L363.592 60.6418C348.734 37.3783 333.852 18.3216 318.946 3.47162C304.039 -11.3784 271.47 -30.6362 221.239 -54.3018L176.399 214.843Z' fill='url(%23paint1_linear_14_124)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M360.093 229.774L259.29 -3.77069H-20.5831L360.093 229.774Z' fill='url(%23paint2_linear_14_124)'/%3e%3cpath style='mix-blend-mode:multiply' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M-4.82922 208.121L335.226 12.614V208.121H-4.82922Z' fill='url(%23paint3_linear_14_124)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_14_124' x1='-49.1755' y1='59.5891' x2='226.829' y2='308.223' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_14_124' x1='171.374' y1='25.0656' x2='358.919' y2='132.647' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_14_124' x1='-30.8027' y1='65.0985' x2='149.757' y2='307.838' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_14_124' x1='344.355' y1='70.2664' x2='196.282' y2='282.686' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`;

export const BLOG_OVERLAY = `data:image/svg+xml;charset=UTF-8,%3csvg width='370' height='220' viewBox='0 0 370 220' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg filter='url(%23filter0_d_580_531)'%3e%3cg clip-path='url(%23clip0_580_531)'%3e%3crect width='370.034' height='203.299' rx='5.85034' fill='url(%23paint0_linear_580_531)' fill-opacity='0.9'/%3e%3crect x='255.308' y='73.4583' width='356.773' height='295.814' rx='6' transform='rotate(-27.2691 255.308 73.4583)' fill='%23696DF3'/%3e%3crect x='234.127' y='96.0155' width='380.058' height='295.814' rx='6' transform='rotate(-28.3331 234.127 96.0155)' fill='%237BE8D8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d_580_531' x='-10.2381' y='-4.38775' width='390.51' height='223.776' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dy='5.85034'/%3e%3cfeGaussianBlur stdDeviation='5.11905'/%3e%3cfeComposite in2='hardAlpha' operator='out'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_580_531'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_580_531' result='shape'/%3e%3c/filter%3e%3clinearGradient id='paint0_linear_580_531' x1='185.017' y1='0' x2='185.017' y2='203.299' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23E8E8E8' stop-opacity='0'/%3e%3cstop offset='1'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_580_531'%3e%3crect width='370.034' height='203.299' rx='5' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;

export const PAYMENT_BG = `data:image/svg+xml;charset=UTF-8,%3csvg width='139' height='130' viewBox='0 0 139 130' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='95' height='95' rx='6' transform='matrix(-0.901996 0.431744 0.431744 0.901996 85.6897 0)' fill='%23696DF3'/%3e%3crect width='105.867' height='95' rx='6' transform='matrix(-0.920692 0.390289 0.390289 0.920692 101.176 0.758789)' fill='%237BE8D8'/%3e%3c/svg%3e`;

export const PAYMENT_BG_FINE = `data:image/svg+xml;charset=UTF-8,%3csvg width='139' height='130' viewBox='0 0 139 130' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='95' height='95' rx='6' transform='matrix(-0.901996 0.431744 0.431744 0.901996 85.6897 0)' fill='%23F37A69'/%3e%3crect width='105.867' height='95' rx='6' transform='matrix(-0.920692 0.390289 0.390289 0.920692 101.176 0.758789)' fill='%23F4C2C2'/%3e%3c/svg%3e`;

export const PAYMENT_HEAD =
  "data:image/svg+xml;charset=UTF-8,%3csvg width='930' height='348' viewBox='0 0 930 348' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_751_709)'%3e%3cmask id='mask0_751_709' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-28' y='-23' width='1005' height='389'%3e%3cpath d='M911.082 -23H38.4575C2.05215 -23 -27.4602 -4.71307 -27.4602 17.845V325.155C-27.4602 347.713 2.05215 366 38.4575 366H911.082C947.488 366 977 347.713 977 325.155V17.845C977 -4.71307 947.488 -23 911.082 -23Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_751_709)'%3e%3cpath d='M911.082 -23H38.4575C2.05215 -23 -27.4602 -4.71307 -27.4602 17.845V325.155C-27.4602 347.713 2.05215 366 38.4575 366H911.082C947.488 366 977 347.713 977 325.155V17.845C977 -4.71307 947.488 -23 911.082 -23Z' fill='%23696DF3'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M220.516 -79.405L1267.33 429.001V-58.1944L220.516 -79.405Z' fill='%23D8D8D8'/%3e%3c/g%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M364.907 -79.405L1411.72 429.001V-58.1944L364.907 -79.405Z' fill='%23D8D8D8'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_751_709'%3e%3crect width='930' height='348' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e ";

export const SUCCESS_BG = `data:image/svg+xml;charset=UTF-8,%3csvg width='304' height='184' viewBox='0 0 304 184' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_103_159)'%3e%3cmask id='mask0_103_159' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-8' y='-8' width='320' height='200'%3e%3cpath d='M291 -8H13C1.40202 -8 -8 1.40202 -8 13V171C-8 182.598 1.40202 192 13 192H291C302.598 192 312 182.598 312 171V13C312 1.40202 302.598 -8 291 -8Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_103_159)'%3e%3cpath d='M291 -8H13C1.40202 -8 -8 1.40202 -8 13V171C-8 182.598 1.40202 192 13 192H291C302.598 192 312 182.598 312 171V13C312 1.40202 302.598 -8 291 -8Z' fill='%237BE8D8'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M108.689 293.995L328.392 -49.788L-47.0952 184.174L108.689 293.995Z' fill='url(%23paint0_linear_103_159)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M168.399 206.843L355.592 52.6418C340.734 29.3783 325.852 10.3216 310.946 -4.52838C296.039 -19.3784 263.47 -38.6362 213.239 -62.3018L168.399 206.843Z' fill='url(%23paint1_linear_103_159)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M352.093 221.774L251.29 -11.7707H-28.5831L352.093 221.774Z' fill='url(%23paint2_linear_103_159)'/%3e%3cpath style='mix-blend-mode:multiply' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M-12.8292 200.121L327.226 4.61398V200.121H-12.8292Z' fill='url(%23paint3_linear_103_159)'/%3e%3c/g%3e%3cpath d='M-8 -8V-8.5L-8.5 -8H-8ZM312 -8H312.5L312 -8.5V-8ZM312 192V192.5L312.5 192H312ZM-8 192H-8.5L-8 192.5V192ZM-8 -7.5H312V-8.5H-8V-7.5ZM311.5 -8V192H312.5V-8H311.5ZM312 191.5H-8V192.5H312V191.5ZM-7.5 192V-8H-8.5V192H-7.5Z' fill='black'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_103_159' x1='-57.1755' y1='51.5891' x2='218.829' y2='300.223' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_103_159' x1='163.374' y1='17.0656' x2='350.919' y2='124.647' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_103_159' x1='-38.8027' y1='57.0985' x2='141.757' y2='299.838' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_103_159' x1='336.355' y1='62.2664' x2='188.282' y2='274.686' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_103_159'%3e%3crect width='304' height='184' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e`;

export const PENDING_BG = `data:image/svg+xml;charset=UTF-8,%3csvg width='304' height='184' viewBox='0 0 304 184' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_103_159)'%3e%3cmask id='mask0_103_159' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-8' y='-8' width='320' height='200'%3e%3cpath d='M291 -8H13C1.40202 -8 -8 1.40202 -8 13V171C-8 182.598 1.40202 192 13 192H291C302.598 192 312 182.598 312 171V13C312 1.40202 302.598 -8 291 -8Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_103_159)'%3e%3cpath d='M291 -8H13C1.40202 -8 -8 1.40202 -8 13V171C-8 182.598 1.40202 192 13 192H291C302.598 192 312 182.598 312 171V13C312 1.40202 302.598 -8 291 -8Z' fill='%23FFC086'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M108.689 293.995L328.392 -49.788L-47.0952 184.174L108.689 293.995Z' fill='url(%23paint0_linear_103_159)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M168.399 206.843L355.592 52.6418C340.734 29.3783 325.852 10.3216 310.946 -4.52838C296.039 -19.3784 263.47 -38.6362 213.239 -62.3018L168.399 206.843Z' fill='url(%23paint1_linear_103_159)'/%3e%3cpath style='mix-blend-mode:soft-light' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M352.093 221.774L251.29 -11.7707H-28.5831L352.093 221.774Z' fill='url(%23paint2_linear_103_159)'/%3e%3cpath style='mix-blend-mode:multiply' opacity='0.5' fill-rule='evenodd' clip-rule='evenodd' d='M-12.8292 200.121L327.226 4.61398V200.121H-12.8292Z' fill='url(%23paint3_linear_103_159)'/%3e%3c/g%3e%3cpath d='M-8 -8V-8.5L-8.5 -8H-8ZM312 -8H312.5L312 -8.5V-8ZM312 192V192.5L312.5 192H312ZM-8 192H-8.5L-8 192.5V192ZM-8 -7.5H312V-8.5H-8V-7.5ZM311.5 -8V192H312.5V-8H311.5ZM312 191.5H-8V192.5H312V191.5ZM-7.5 192V-8H-8.5V192H-7.5Z' fill='black'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='paint0_linear_103_159' x1='-57.1755' y1='51.5891' x2='218.829' y2='300.223' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint1_linear_103_159' x1='163.374' y1='17.0656' x2='350.919' y2='124.647' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint2_linear_103_159' x1='-38.8027' y1='57.0985' x2='141.757' y2='299.838' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient id='paint3_linear_103_159' x1='336.355' y1='62.2664' x2='188.282' y2='274.686' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23EEEEEE'/%3e%3cstop offset='1' stop-color='%23D8D8D8' stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath id='clip0_103_159'%3e%3crect width='304' height='184' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e `;

export const EXPENSE_BG = `data:image/svg+xml;charset=UTF-8,%3csvg width='930' height='348' viewBox='0 0 930 348' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_845_359)'%3e%3cmask id='mask0_845_359' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-28' y='-23' width='1005' height='389'%3e%3cpath d='M911.082 -23H38.4577C2.0524 -23 -27.46 -4.71307 -27.46 17.845V325.155C-27.46 347.713 2.0524 366 38.4577 366H911.082C947.488 366 977 347.713 977 325.155V17.845C977 -4.71307 947.488 -23 911.082 -23Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_845_359)'%3e%3cpath d='M911.082 -23H38.4577C2.0524 -23 -27.46 -4.71307 -27.46 17.845V325.155C-27.46 347.713 2.0524 366 38.4577 366H911.082C947.488 366 977 347.713 977 325.155V17.845C977 -4.71307 947.488 -23 911.082 -23Z' fill='%23FFA681'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M-195 467.501L906.665 92.4876L846.4 575.941L-195 467.501Z' fill='%23D8D8D8'/%3e%3c/g%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M-51.7183 485.362L1049.95 110.348L989.682 593.802L-51.7183 485.362Z' fill='%23D8D8D8'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_845_359'%3e%3crect width='930' height='348' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e `;

export const DONATION_BG = `data:image/svg+xml;charset=UTF-8,%3csvg width='930' height='348' viewBox='0 0 930 348' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_846_377)'%3e%3cmask id='mask0_846_377' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='-28' y='-23' width='1005' height='389'%3e%3cpath d='M911.082 -23H38.4577C2.0524 -23 -27.46 -4.71307 -27.46 17.845V325.155C-27.46 347.713 2.0524 366 38.4577 366H911.082C947.488 366 977 347.713 977 325.155V17.845C977 -4.71307 947.488 -23 911.082 -23Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_846_377)'%3e%3cpath d='M911.082 -23H38.4577C2.0524 -23 -27.46 -4.71307 -27.46 17.845V325.155C-27.46 347.713 2.0524 366 38.4577 366H911.082C947.488 366 977 347.713 977 325.155V17.845C977 -4.71307 947.488 -23 911.082 -23Z' fill='%2359D5C2'/%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M667.141 27L1162.88 1096.44L669.481 1087.53L667.141 27Z' fill='%23D8D8D8'/%3e%3c/g%3e%3cg style='mix-blend-mode:multiply' opacity='0.5'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M621.141 167.229L1116.88 1236.67L623.481 1227.76L621.141 167.229Z' fill='%23D8D8D8'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_846_377'%3e%3crect width='930' height='348' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e `;
