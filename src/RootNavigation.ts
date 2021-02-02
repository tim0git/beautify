import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params: object): void {
  navigationRef.current?.navigate(name, params);
}

export function goBack(): void {
  navigationRef.current?.goBack();
}
