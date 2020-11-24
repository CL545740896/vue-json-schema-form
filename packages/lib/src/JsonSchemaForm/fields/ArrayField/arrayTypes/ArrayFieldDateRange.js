/**
 * Created by Liu.Jun on 2020/9/16 10:25.
 */

import vueProps from '../../props';
import Widget from '../../../fieldComponents/Widget';
import { getWidgetConfig } from '../../../common/formUtils';
import WIDGET_MAP from '../../../config/WIDGET_MAP';

export default {
    name: 'ArrayFieldDateRange',
    props: vueProps,
    functional: true,
    render(h, context) {
        const {
            schema, uiSchema, curNodePath, rootFormData
        } = context.props;
        const widgetConfig = getWidgetConfig({
            schema,
            uiSchema: {
                'ui:widget': WIDGET_MAP.formats[schema.format],
                ...uiSchema,
            },
            curNodePath,
            rootFormData
        });

        return h(
            Widget,
            {
                ...context.data,
                props: {
                    ...context.props,
                    ...widgetConfig
                }
            }
        );
    }
};
