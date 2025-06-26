export const scrollToBottom = (current) =>
    current.scrollTo({ top: current.scrollHeight, behavior: 'smooth' });

export const scrollToCenter = (current) =>
    current.scrollTo({ top: current.scrollHeight / 2, behavior: 'smooth' });

export const scrollToTop = (current) => 
    current.scrollTo({ top: 0, behavior: 'smooth' });

export const scrollIntoView = (element) => element.scrollIntoView({behavior: 'smooth', block: 'nearest'});