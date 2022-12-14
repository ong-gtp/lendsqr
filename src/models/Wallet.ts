import { Model } from 'objection';

import Table from '../resources/enums/Table';
import Currency from './Currency';

class Wallet extends Model {
  id!: number;
  currencyId!: number;
  userId!: number;
  balance!: number;
  createdAt!: string;
  updatedAt!: string;
  currency?: Currency;

  static get tableName(): string {
    return Table.WALLETS;
  }

  static relationMappings = {
    currency: {
      relation: Model.BelongsToOneRelation,
      modelClass: Currency,
      join: {
        from: 'wallets.currency_id',
        to: 'currencies.id'
      }
    }
  };

  $beforeInsert() {
    this.createdAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
    this.updatedAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toJSON().slice(0, 19).replace('T', ' ');
  }
}

export default Wallet;
