import React from 'react';
import { TransitionComponent } from '@restart/ui/types';

export function Omit(obj, keys) {
    const result = { ...obj };
    keys.forEach((key) => {
        delete result[key];
    });
    return result;
}

export function ReplaceProps(Inner, props) {
    const result = { ...props };
    delete result.bsPrefix;
    return result;
}

export function EclipsePrefixComponent(props) {
    return <div {...props} />;
}

export function getOverlayDirection(placement, isRTL) {
    let eclipseDirection = placement;
    if (placement === 'left') {
        eclipseDirection = isRTL ? 'end' : 'start';
    } else if (placement === 'right') {
        eclipseDirection = isRTL ? 'start' : 'end';
    }
    return eclipseDirection;
}
