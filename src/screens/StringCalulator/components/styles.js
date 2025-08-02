// Styles for StringCalculator component
export const stringCalculatorStyles = {
  container: {
    display: 'flex', 
    justifyContent: 'center', 
    backgroundColor: '#f5f5f5',
    padding: '40px 20px',
    minHeight: '100vh'
  },
  
  card: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    height: 'fit-content',
    overflow: 'hidden'
  },
  
  header: {
    padding: '30px 40px 20px 40px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e0e0e0',
    textAlign: 'center'
  },
  
  title: {
    margin: '0 0 8px 0', 
    color: '#333', 
    fontSize: '24px'
  },
  
  subtitle: {
    margin: '0', 
    color: '#666', 
    fontWeight: 'normal', 
    fontSize: '16px'
  },
  
  content: {
    padding: '40px'
  }
};

// Styles for Form component
export const formStyles = {
  container: {
    textAlign: 'center'
  },
  
  headerBox: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '30px'
  },
  
  heading: {
    margin: '0 0 8px 0',
    color: '#333',
    fontSize: '20px',
    fontWeight: '600'
  },
  
  subheading: {
    margin: '0',
    color: '#666',
    fontSize: '14px',
    fontWeight: 'normal'
  },
  
  formBox: {
    backgroundColor: '#fafafa',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '25px'
  },
  
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left'
  },
  
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#374151',
    fontSize: '14px',
    fontWeight: '700'
  },
  
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'white',
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    boxSizing: 'border-box'
  },
  
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out, transform 0.1s ease-in-out',
    minWidth: '120px'
  },
  
  error: {
    marginTop: '8px',
    padding: '8px 12px',
    backgroundColor: '#fee2e2',
    border: '1px solid #fecaca',
    borderRadius: '4px',
    color: '#dc2626',
    fontSize: '14px',
    fontWeight: '500'
  }
};

// Styles for Result component
export const resultStyles = {
  container: {
    textAlign: 'center',
    marginTop: '30px'
  },
  
  resultBox: {
    backgroundColor: '#f0f9ff',
    border: '1px solid #bfdbfe',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '25px'
  },
  
  resultHeading: {
    margin: '0 0 15px 0',
    color: '#1e40af',
    fontSize: '18px',
    fontWeight: '600'
  },
  
  resultValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e40af',
    margin: '0',
    fontFamily: 'monospace'
  },
  
  examplesBox: {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'left'
  },
  
  examplesTitle: {
    margin: '0 0 15px 0',
    color: '#374151',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center'
  },
  
  exampleItem: {
    margin: '8px 0',
    fontSize: '13px',
    fontFamily: 'monospace',
    color: '#4b5563',
    lineHeight: '1.4'
  },
  
  exampleDescription: {
    fontSize: '12px',
    color: '#6b7280',
    fontStyle: 'italic',
    marginLeft: '10px'
  }
};
