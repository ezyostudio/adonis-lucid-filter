/*
 * adonis-lucid-filter
 *
 * (c) Lookin Anton <alf@lookinlab.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { ApplicationService } from '@adonisjs/core/types'

/**
 * Lucid Filter service provider
 */
export default class LucidFilterProvider {
  constructor(protected app: ApplicationService) {}

  async boot() {
    /**
     * Extend ModelQueryBuilder
     */
  }
}
