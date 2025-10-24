// Extract the video id from common YouTube URL formats
function extractYouTubeId(url) {
    if (!url) return null;
    try {
        // Examples supported:
        // https://youtu.be/tXaj-fNuyRA
        // https://www.youtube.com/watch?v=tXaj-fNuyRA
        // https://www.youtube.com/embed/tXaj-fNuyRA
        const u = new URL(url, 'https://example.com');
        // youtu.be short link
        if (u.hostname === 'youtu.be') return u.pathname.replace(/^\//, '');
        // youtube domain
        if (u.hostname.includes('youtube.com')) {
            // /watch?v=...
            if (u.searchParams.has('v')) return u.searchParams.get('v');
            // /embed/...
            const parts = u.pathname.split('/').filter(Boolean);
            const idx = parts.indexOf('embed');
            if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
            // fallback last path segment
            return parts.pop();
        }
        // fallback: take last segment after slash
        const fallback = url.split('/').filter(Boolean).pop();
        return fallback;
    } catch (e) {
        // not a valid URL, try pattern match
        const m = url.match(/([\w-]{11})$/);
        return m ? m[1] : null;
    }
}

export default function Youtube({ url, width = 750, height = 422, allowFullScreen = true }) {
    const id = extractYouTubeId(url);
    if (!id) return null;

    const src = `https://www.youtube.com/embed/${encodeURIComponent(id)}?rel=0`;

    return (
        <div className="youtube-wrapper">
            <iframe
                width={width}
                height={height}
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={allowFullScreen}
            />
        </div>
    );
}
