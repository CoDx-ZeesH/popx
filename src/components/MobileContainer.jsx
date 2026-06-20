import '../css/MobileContainer.css';

/**
 * Wraps every screen so the app always renders as a centered,
 * fixed-width "mobile" frame (~375px) regardless of viewport size.
 * On small/real mobile screens the frame fills the viewport instead.
 */
function MobileContainer({ children }) {
  return (
    <div className="screen-backdrop">
      <div className="mobile-container">{children}</div>
    </div>
  );
}

export default MobileContainer;
