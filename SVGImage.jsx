import React from 'react';
import { Image, Platform } from 'react-native';
/**@source import res of svg file
 * @height for image
 * @width for image
 * @style for image
 * @svgProps props for the svg element (works on native devices)
 * @imageProps props for react-native's image element (works on web)
 */

export default function SVGImage(props) {
    const SvgSource = props.source;
    if (Platform.OS === "web") {
        const otherProps = { ...props.imageProps };
        let styleWeb = (props.imageProps && props.imageProps.style) || props.style
        delete otherProps.style;
        return <Image source={SvgSource}
            style={styleWeb ? styleWeb : { width: props.width, height: props.height }}
            {...otherProps} />
    }
    else {
        return <SvgSource
            height={props.height}
            width={props.width}
            style={props.style}
            {...props.svgProps} />


    }
} 