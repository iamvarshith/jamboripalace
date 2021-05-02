"""empty message

Revision ID: 34d59567a191
Revises: 496e1a3acd58
Create Date: 2021-04-06 21:32:40.908337

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '34d59567a191'
down_revision = '496e1a3acd58'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'unique_id',
               existing_type=sa.INTEGER(),
               nullable='False')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'unique_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###