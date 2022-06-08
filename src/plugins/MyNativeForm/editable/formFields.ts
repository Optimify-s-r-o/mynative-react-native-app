export default {
  allowedOn: 'property',
  config: {
    label: 'Fields',
    type: 'array',
    config: {
      label: {
        label: 'Label',
        type: 'text',
      },
      key: {
        label: 'Unique key',
        type: 'text',
      },
      placeholder: {
        label: 'Placeholder',
        type: 'text',
        required: false,
      },
    },
  },
  value: (data: Array<any>) => {
    data.reduce((obj, entry) => {
      obj[entry.key] = `{
        default: '${entry.default}',
        render: (props) => (
          <TextInput
            label='${entry.label}'
            type="email"
            {...props}
            rules={{
              required: 'You must enter valid email address.',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'You must enter valid email address.',
              },
            }}
          />
        ),
      }`;
      return obj;
    }, {});
  },
};
