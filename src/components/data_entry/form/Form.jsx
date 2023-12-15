import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import FormCheck from './FormCheck';
import FormControl from './FormControl';
import FormFloating from './FormFloating';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormRange from './FormRange';
import FormSelect from './FormSelect';
import FormText from './FormText';
import Switch from './Switch';
import FloatingLabel from './FloatingLabel';

export const propTypes = {
    _ref: PropTypes.any,
    validated: PropTypes.bool,
    as: PropTypes.elementType,
};

const Form = forwardRef(
    ({ className, validated, as: Component = 'form', ...props }, ref) => (
        <Component
            {...props}
            ref={ref}
            className={classNames(className, validated && 'was-validated')}
        />
    )
);

Form.displayName = 'Form';
Form.propTypes = propTypes;

const EnhancedForm = Object.assign(Form, {
    Group: FormGroup,
    Control: FormControl,
    Floating: FormFloating,
    Check: FormCheck,
    Switch,
    Label: FormLabel,
    Text: FormText,
    Range: FormRange,
    Select: FormSelect,
    FloatingLabel,
});

export default EnhancedForm;
