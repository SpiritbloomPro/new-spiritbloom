export default function VideoClip({ url, side = 'center' }) {
  return (
    <div class={"video video-" + side}>
        <video autoPlay loop muted>
            <source src={ url }/>
        </video>
    </div>
  );
}
