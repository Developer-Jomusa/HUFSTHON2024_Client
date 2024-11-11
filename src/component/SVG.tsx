import * as svg from '../../asset/svg/index.ts';
import { SvgProps } from 'react-native-svg';

export type SVGIconProps = SvgProps & {
    name: keyof typeof svg;
};

const SVG = ({ name, ...props } : SVGIconProps) => {
    const Icon = svg[name];
    return (
        <Icon {...props} />
    );
};

export default SVG;