const stiloso = require('stiloso');	// eslint-disable-line import/no-extraneous-dependencies,import/no-unresolved

// Create a ToolbarHeader component rendered as
// <header className="toolbar toolbar-header"/>
export const ToolbarHeader = stiloso.header('toolbar', 'toolbar-header');

// Create a Window component rendered as <main className="window"/>
export const Window = stiloso.main('window');

// Create a Warning component rendered as <span style="color: red"/>
export const Warning = stiloso.span({color: 'red'});

// Create a Title component rendered as
// <span className="title" style="font-size: 40px" />
export const Title = stiloso.h1('title', {fontSize: 40});

// Create a Pane component rendered as
// <section className="pane"/>
// `section` element will contains additional class `pane-sm`
// if `small` boolean property is provided to the component.
// <Pane small> is rendered as <section className="pane pane-sm"/>
export const Pane = stiloso.section('pane', props =>
	props.small ? 'pane-sm' : null
);
