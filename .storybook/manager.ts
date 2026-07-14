import { addons } from 'storybook/manager-api';

addons.setConfig({
  layoutCustomisations: {
    showSidebar() {
      return process.env.STORYBOOK_SIDEBAR_VISIBILITY !== 'hidden';
    },
    showToolbar() {
      return process.env.STORYBOOK_TOOLBAR_VISIBILITY !== 'hidden';
    },
  },
});