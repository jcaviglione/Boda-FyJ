export const mapsUrl = address => 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address);
export const flower = css => '<span class="flower '+(css || '')+'" aria-hidden="true">✿</span>';
export const sectionHeading = (label,title,desc='') => '<div class="eyebrow">'+label+'</div><h2>'+title+'</h2><p class="section-lead">'+desc+'</p>';
