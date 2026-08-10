// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import WowheadLink from '@site/src/components/WowheadLink';
import VideoClip from '@site/src/components/VideoClip';
import WowheadTalents from '@site/src/components/WowheadTalents';
import Youtube from '@site/src/components/YoutubeVideo';
import Copy from '@site/src/components/CopyContent';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import Image from './Image';
import ContentGrid from '@site/src/components/ContentGrid';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    Tabs,
    TabItem,
    Admonition,
    img: Image,
    Copy,
    WowheadLink,
    WowheadTalents,
    VideoClip,
    Youtube,
    ContentGrid
};