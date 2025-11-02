// Flag Components

export const UzbekistanFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Blue stripe (top) */}
    <rect width="24" height="5.33" fill="#0099B5"/>

    {/* Red stripe 1 */}
    <rect y="5.33" width="24" height="0.4" fill="#CE1126"/>

    {/* White stripe 1 */}
    <rect y="5.73" width="24" height="0.54" fill="#FFFFFF"/>

    {/* Red stripe 2 */}
    <rect y="6.27" width="24" height="0.4" fill="#CE1126"/>

    {/* White middle */}
    <rect y="6.67" width="24" height="2.66" fill="#FFFFFF"/>

    {/* Red stripe 3 */}
    <rect y="9.33" width="24" height="0.4" fill="#CE1126"/>

    {/* White stripe 2 */}
    <rect y="9.73" width="24" height="0.54" fill="#FFFFFF"/>

    {/* Red stripe 4 */}
    <rect y="10.27" width="24" height="0.4" fill="#CE1126"/>

    {/* Green stripe (bottom) */}
    <rect y="10.67" width="24" height="5.33" fill="#1EB53A"/>

    {/* Crescent moon */}
    <circle cx="3.5" cy="2.5" r="1.2" fill="#FFFFFF"/>
    <circle cx="4" cy="2.5" r="1" fill="#0099B5"/>

    {/* Stars - 3 rows */}
    {/* Row 1 - 3 stars */}
    <circle cx="6.5" cy="1.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="7.5" cy="1.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="8.5" cy="1.2" r="0.25" fill="#FFFFFF"/>

    {/* Row 2 - 4 stars */}
    <circle cx="6" cy="2.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="7" cy="2.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="8" cy="2.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="9" cy="2.2" r="0.25" fill="#FFFFFF"/>

    {/* Row 3 - 5 stars */}
    <circle cx="5.5" cy="3.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="6.5" cy="3.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="7.5" cy="3.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="8.5" cy="3.2" r="0.25" fill="#FFFFFF"/>
    <circle cx="9.5" cy="3.2" r="0.25" fill="#FFFFFF"/>
  </svg>
);

export const RussiaFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="5.33" fill="#FFFFFF"/>
    <rect y="5.33" width="24" height="5.33" fill="#0039A6"/>
    <rect y="10.67" width="24" height="5.33" fill="#D52B1E"/>
  </svg>
);

export const UKFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="16" fill="#012169"/>
    <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="3.2"/>
    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="2"/>
    <path d="M12 0V16M0 8H24" stroke="#FFFFFF" strokeWidth="5.33"/>
    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3.2"/>
  </svg>
);
