import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogSection extends Schema.Component {
  collectionName: 'components_blog_sections';
  info: {
    displayName: 'Section';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.section': BlogSection;
    }
  }
}
