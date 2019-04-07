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
            top: '32px',
        },
        lines: [
            {
                top: '565px',
                left: '686px',
                width: '30px',
                transform: 'rotate(-30deg)',
            }
        ]
    }
];

export {
    talentAttackAssetWithCSS,
};
