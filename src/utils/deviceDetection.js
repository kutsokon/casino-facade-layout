const isMobileOrTable = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const deviceType = isMobileOrTable ? 'mobile' : 'desktop';
export const MOBILE = 'mobile';
export const DESKTOP = 'desktop';
