// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import WowheadLink from '@site/src/components/WowheadLink';
import VideoClip from '@site/src/components/VideoClip';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    Tabs,
    TabItem,
    WowheadLink,
    VideoClip
};