import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (wrapper, attrVal) =>  wrapper.find(`[data-test='${attrVal}']`);

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}