// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import WowheadLink from '@site/src/components/WowheadLink';
import VideoClip from '@site/src/components/VideoClip';
import WowheadTalents from '@site/src/components/WowheadTalents';
import Youtube from '@site/src/components/YoutubeVideo';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from './Image';

export default {
    // Re-use the default mapping
    ...MDXComponents,
    Tabs,
    TabItem,
    img: Image,
    WowheadLink,
    WowheadTalents,
    VideoClip,
    Youtube
};