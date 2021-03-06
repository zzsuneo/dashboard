// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {StateParams} from '../../common/resource/resourcedetail';
import {stateName} from '../detail/state';

class ThirdPartyResourceCardController {
  /**
   * @param {!ui.router.$state} $state
   * @ngInject
   */
  constructor($state) {
    /**
     * Initialized from the scope.
     * @export {!backendApi.ThirdPartyResource}
     */
    this.thirdPartyResource;

    /** @private {!ui.router.$state} */
    this.state_ = $state;
  }

  /**
   * @export
   * @return {string}
   */
  getThirdPartyResourceDetailHref() {
    return this.state_.href(
        stateName, new StateParams('', this.thirdPartyResource.objectMeta.name));
  }
}

/**
 * @type {!angular.Component}
 */
export const thirdPartyResourceCardComponent = {
  bindings: {
    'thirdPartyResource': '=',
  },
  controller: ThirdPartyResourceCardController,
  templateUrl: 'thirdpartyresource/list/card.html',
};
