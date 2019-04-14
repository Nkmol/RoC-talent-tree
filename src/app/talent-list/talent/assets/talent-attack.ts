import { TalentAssetWithCSS } from './talent-asset.interface';

const talentAttackAssetWithCSS: Array<TalentAssetWithCSS> = [
    {
        name: 'Attack',
        description: 'Increase the attack of all units led by this commander by <b>{0}%</b>.',
        values: [
            [
                0.5,
            ],
        ],
        coordinates: {
            left: '705px',
            top: '320px',
        },
        lines: [
            {
                top: '0',
                left: '26px',
                width: '30px',
                transform: 'rotate(-30deg)',
            }
        ]
    }
];

export {
    talentAttackAssetWithCSS,
};
