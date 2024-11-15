import * as svg from '../../asset/svg/index.ts';
import { SvgProps } from 'react-native-svg';

export type SVGIconProps = SvgProps & {
    name: keyof typeof svg;
};

const SVG = ({ name, ...props }: SVGIconProps) => {
    const Icon = svg[name] || svg.defaultprofile; // 기본 아이콘 사용
    return <Icon {...props} />;
};


export default SVG;