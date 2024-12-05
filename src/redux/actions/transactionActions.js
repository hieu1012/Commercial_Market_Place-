export const SAVE_TRANSACTION = 'SAVE_TRANSACTION';

export const saveTransaction = (transaction) => ({
  type: SAVE_TRANSACTION,
  payload: transaction,
});
