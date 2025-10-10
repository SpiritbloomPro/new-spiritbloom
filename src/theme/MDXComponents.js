// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import WowheadLink from '@site/src/components/WowheadLink';
import VideoClip from '@site/src/components/VideoClip';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    WowheadLink,
    VideoClip
};