import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { slugField } from '@/fields/slug'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: () => true, // Allow public read access
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'slug', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    ...slugField('name'),
  ],
  timestamps: true,
}
