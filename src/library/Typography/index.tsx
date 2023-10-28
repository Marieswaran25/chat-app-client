import './typography.scss';

import { ElementType } from 'react';

import colors from '@theme/colors.module.scss';

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Typography type
     */
    type: 'p1' | 'p2' | 'p3' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'd1' | 'd2' | 'd3' | 'd4';
    /**
     * Typography type
     */
    weight: 'light' | 'regular' | 'semiboldItalic' | 'semibold' | 'black';
    /**
     * The text to display
     */
    text: string;
    /**
     * Optional logo to display following the text
     */
    /**
     * Custom element tag
     */
    as?: ElementType;
    /**
     * Font color
     */
    color: typeof colors.B9 | typeof colors.B4 | typeof colors.B5 | typeof colors.B0 | typeof colors.T5;
}

const Typography = ({ type, weight, text, color, style, as: Tag = 'span', ...props }: TypographyProps) => {
    return (
        <Tag className={['typography', type, weight].join(' ')} style={{ color, ...style }} {...props}>
            {text}
        </Tag>
    );
};

export type { TypographyProps };
export default Typography;
export { Typography };
